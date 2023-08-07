import { useEffect, useState } from "react";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Container, Text } from "../../styles/styled-utils";
import {
  CarouselButton,
  CarouselButtonsContainer,
  CarouselDescription,
  CarouselImages,
  RepositoriesContainer,
} from "./styles";
import { useAnimation, motion } from "framer-motion";

export const Repositories = () => {
  const [activeItem, setActiveItem] = useState(0);
  const repositories = [
    {
      title: "Spider-man landing page",
      description:
        "Significant contributions to the management system of ClubPetro, a company responsible for accelerating results in more than 1,200 gas stations in Brazil. A complete administrative system that handles all flows of registration and management of users, posts, programs and faithfulness.",
      image: IMAGES.cpDashboard,
      link: "",
    },
    {
      title: "Json Api",
      description:
        "Significant contributions to the management system ofof users, posts, programs and faithfulness.",
      image: IMAGES.cpDashboard,
      link: "",
    },
    {
      title: "Mifcokoaskd",
      description:
        "Significant contributions to the management system ofoaksdokasogistration and management of users, posts, programs and faithfulness.",
      image: IMAGES.cpDashboard,
      link: "",
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
    <Container>
      <Title number={4} text="Repositórios" />

      <RepositoriesContainer>
        <CarouselDescription>
          <CarouselButtonsContainer>
            {repositories.map((_item, index) => (
              <CarouselButton
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
              <img src={IMAGES.left} />
            </button>
            <button
              className="directionButton"
              onClick={() =>
                activeItem + 1 < repositories.length
                  ? setActiveItem(activeItem + 1)
                  : setActiveItem(0)
              }
            >
              <img src={IMAGES.right} />
            </button>
          </CarouselButtonsContainer>

          <motion.h3
            animate={controls}
            transition={{ duration: 1.2, delay: 0.1 }}
          >
            {repositories[activeItem].title}
          </motion.h3>
          <Text animate={controls} transition={{ duration: 1.2, delay: 0.2 }}>
            {repositories[activeItem].description}
          </Text>
        </CarouselDescription>
        <CarouselImages>
          <motion.img
            animate={controls}
            transition={{ duration: 1.2 }}
            src={repositories[activeItem].image}
          ></motion.img>
        </CarouselImages>
      </RepositoriesContainer>
    </Container>
  );
};
