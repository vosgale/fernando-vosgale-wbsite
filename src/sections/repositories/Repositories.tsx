import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import {
  CarouselButton,
  CarouselButtonsContainer,
  CarouselDescription,
  CarouselImages,
  RepositoriesContainer,
} from "./styles";
import { useAnimation, motion } from "framer-motion";
import AnimatedContainer from "../../Components/AnimatedContainer";
import { LeftIcon, RightIcon } from "./Icons";

export const Repositories = () => {
  const [activeItem, setActiveItem] = useState(0);
  const repositories = [
    {
      title: "Spider-man landing page",
      description:
        "Landing page desenvolvida durante a frontweek, utilizando o lançamento de Spider-Man: Miles Morales como tema. Demonstra como podemos usar Javascript para orquestrar animações e o uso de variaveis em SCSS para agilizar o desenvolvimento de estilos.",
      image: IMAGES.spiderMan,
      link: "https://github.com/vosgale/Spider-man",
    },
    {
      title: "JSON-API",
      description:
        "Uma POC desenvolvida com o objetivo de demonstrar o uso da lib JSON-API, que possibilita a criação de uma API local, utilizando um arquivo JSON como armazenamento de dados. Muito útil em projetos ou features que dependem de colaboração com times de backend.",
      image: IMAGES.places,
      link: "https://github.com/vosgale/Lugares",
    },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.set({ opacity: 0, transform: "translateX(50px)" });
    controls.start({
      opacity: 1,
      transform: "translateX(0px)",
    });
  }, [activeItem, controls]);
  return (
    <AnimatedContainer>
      <Title number={4} text="Repositórios" />
      <RepositoriesContainer>
        <CarouselDescription>
          <motion.a
            animate={controls}
            transition={{ duration: 1.2, delay: 0.1 }}
            href={repositories[activeItem].link}
            target="blank"
          >
            {repositories[activeItem].title}
          </motion.a>
          <Text animate={controls} transition={{ duration: 1.2, delay: 0.2 }}>
            {repositories[activeItem].description}
            <br />
          </Text>
          <CarouselButtonsContainer>
            {repositories.map((_item, index) => (
              <CarouselButton
                key={_item.title}
                active={index === activeItem}
                onClick={() => setActiveItem(index)}
              ></CarouselButton>
            ))}
            <button
              onClick={() =>
                activeItem - 1 >= 0
                  ? setActiveItem(activeItem - 1)
                  : setActiveItem(repositories.length - 1)
              }
              className="directionButton"
            >
              <LeftIcon />
            </button>
            <button
              className="directionButton"
              onClick={() =>
                activeItem + 1 < repositories.length
                  ? setActiveItem(activeItem + 1)
                  : setActiveItem(0)
              }
            >
              <RightIcon />
            </button>
          </CarouselButtonsContainer>
        </CarouselDescription>

        <CarouselImages>
          <a href={repositories[activeItem].link} target="blank">
            <motion.img
              animate={controls}
              transition={{ duration: 1.2 }}
              src={repositories[activeItem].image}
            ></motion.img>
          </a>
        </CarouselImages>
      </RepositoriesContainer>
    </AnimatedContainer>
  );
};
