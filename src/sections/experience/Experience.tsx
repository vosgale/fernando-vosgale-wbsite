import Title from "../../Components/Title";
import { useState, useEffect } from "react";
import {
  ButtonOption,
  ButtonsContainer,
  ContentContainer,
  ExperienceContainer,
  ExperienceDateContainer,
  ImageContainer,
  TextContainer,
} from "./styles";
import { motion, useAnimation } from "framer-motion";
import IMAGES from "../../Images";
import { Text } from "../../styles/global-styles";
export const Experience = () => {
  const [active, setActive] = useState(0);
  const experienceOptions = [
    {
      name: "Clubpetro",
      description: `Significant contributions to the management system of ClubPetro, a company responsible for accelerating
       results in more than 1,200 gas stations in Brazil.A complete administrative system that handles all flows of registration
       and management of users, posts, programs and faithfulness.`,
      logo: IMAGES.clubpetro,
      duration: {
        start: "Abril, 2022",
        end: "Atualmente",
      },
      ïnfo: "",
    },
    {
      name: "Lets Grow",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere mauris a sapien suscipit vulputate. Nam quam dui, viverra vitae hendrerit vel, sollicitudin ut enim. Etiam sodales est in dapibus gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
      logo: "",
      duration: {
        start: "Agosto, 2020",
        end: "Abril, 2022",
      },
      ïnfo: "",
    },
    {
      name: "Skolen",
      description: `Morbi pharetra malesuada mi vel laoreet. Proin fermentum nisl at sapien interdum, eu volutpat ligula lacinia. Sed viverra auctor augue id scelerisque. In convallis mauris vitae risus efficitur iaculis. Nullam nibh ligula, commodo ac elit in, facilisis bibendum quam. In pellentesque imperdiet ex, ac hendrerit justo blandit.`,
      logo: IMAGES.skolen,
      duration: {
        start: "Fevereiro, 2021",
        end: "Dezembro, 2022",
      },
      ïnfo: "",
    },
  ];
  const controls = useAnimation();
  useEffect(() => {
    controls.set({ opacity: 0, transform: "translateY(50px)" });
    controls.start({
      opacity: 1,
      transform: "translateY(0px)",
    });
  }, [active, controls]);

  return (
    <ExperienceContainer>
      <Title number={2} text="EXPERIÊNCIA" />
      <ContentContainer>
        <TextContainer>
          <ButtonsContainer>
            {experienceOptions.map((item, index) => (
              <ButtonOption
                onClick={() => setActive(index)}
                active={index === active}
              >
                {item.name}
              </ButtonOption>
            ))}
          </ButtonsContainer>
          <Text
            animate={controls}
            transition={{ duration: 1.2 }}
            className="description"
          >
            {experienceOptions[active].description}
          </Text>
          <ExperienceDateContainer
            animate={controls}
            transition={{ duration: 1.1, delay: 0.2 }}
          >
            <img src={IMAGES.calendar}></img>
            <Text>
              <b>{experienceOptions[active].duration?.start} - </b>
              {experienceOptions[active].duration?.end}
            </Text>
          </ExperienceDateContainer>
        </TextContainer>
        <ImageContainer>
          <motion.img
            animate={controls}
            transition={{ delay: 0.3, duration: 1.2 }}
            src={experienceOptions[active].logo}
          ></motion.img>
        </ImageContainer>
      </ContentContainer>
    </ExperienceContainer>
  );
};
