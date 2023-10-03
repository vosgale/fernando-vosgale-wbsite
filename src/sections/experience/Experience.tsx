import Title from "../../Components/Title";
import { useState, useEffect } from "react";
import {
  ButtonOption,
  ButtonsContainer,
  ContentContainer,
  ExperienceDateContainer,
  InfosContainer,
  TextContainer,
} from "./styles";
import { useAnimation } from "framer-motion";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import AnimatedContainer from "../../Components/AnimatedContainer";

export const Experience = () => {
  const [active, setActive] = useState(0);
  const experienceOptions = [
    {
      name: "Clubpetro",
      description: `Significant contributions to the management system of ClubPetro, a company responsible for accelerating
       results in more than 1,200 gas stations in Brazil.A complete administrative system that handles all flows of registration
       and management of users, posts, programs and faithfulness.`,
      logo: undefined,
      duration: {
        start: "Abril, 2022",
        end: "Atualmente",
      },
      ïnfo: "",
    },
    {
      name: "Lets Grow",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere mauris a sapien suscipit vulputate. Nam quam dui, viverra vitae hendrerit vel, sollicitudin ut enim. Etiam sodales est in dapibus gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
      logo: undefined,
      duration: {
        start: "Agosto, 2020",
        end: "Abril, 2022",
      },
      ïnfo: "",
    },
    {
      name: "Skolen",
      description: `Morbi pharetra malesuada mi vel laoreet. Proin fermentum nisl at sapien interdum, eu volutpat ligula lacinia. Sed viverra auctor augue id scelerisque. In convallis mauris vitae risus efficitur iaculis. Nullam nibh ligula, commodo ac elit in, facilisis bibendum quam. In pellentesque imperdiet ex, ac hendrerit justo blandit.`,
      logo: undefined,
      duration: {
        start: "Fevereiro, 2021",
        end: "Dezembro, 2022",
      },
      ïnfo: "",
    },
  ];
  const controls = useAnimation();
  useEffect(() => {
    controls.set({ opacity: 0, transform: "translateX(-50px)" });
    controls.start({
      opacity: 1,
      transform: "translateX(0px)",
    });
  }, [active, controls]);

  const handleClickScroll = (activeIndex: number) => {
    setActive(activeIndex);
  };

  return (
    <AnimatedContainer>
      <Title number={2} text="Experiência" />
      <ContentContainer>
        <ButtonsContainer id="scrol">
          {experienceOptions.map((item, index) => (
            <ButtonOption
              key={item.name}
              onClick={() => handleClickScroll(index)}
              active={index === active}
              id={String(active)}
            >
              {item.name}
            </ButtonOption>
          ))}
        </ButtonsContainer>

        <InfosContainer>
          <TextContainer animate={controls} transition={{ duration: 1.2 }}>
            <h3>{experienceOptions[active].name}</h3>
            <Text>{experienceOptions[active].description}</Text>

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
        </InfosContainer>
      </ContentContainer>
    </AnimatedContainer>
  );
};
