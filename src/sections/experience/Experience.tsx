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
import { useTranslation } from "react-i18next";
export const Experience = () => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation("experience");
  const experienceOptions = [
    {
      name: "Clubpetro",
      description: t("places.clubpetroDescription"),

      duration: {
        start: `${t("time.months.april")}, 2022`,
        end: t("time.atTheMoment"),
      },
      link: "https://www.clubpetro.com/",
    },
    {
      name: "Lets",
      description: t("places.letsDescription"),
      duration: {
        start: `${t("time.months.august")}, 2020`,
        end: `${t("time.months.april")}, 2022`,
      },
      link: "https://www.lets.com.vc/",
    },
    {
      name: "Skolen",
      description: t("places.skolenDescription"),
      duration: {
        start: `${t("time.months.february")}, 2021`,
        end: `${t("time.months.december")}, 2022`,
      },
      link: "https://skolen.com.br/index.html",
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
      <Title number={2} text={t("title")} />
      <ContentContainer id="1">
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
            <a href={experienceOptions[active].link} target="blank">
              {experienceOptions[active].name}
            </a>
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
