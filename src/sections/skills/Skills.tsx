import React from "react";
import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import { SkillCard, SkillCardContainer } from "./styles";
import { useTranslation } from "react-i18next";
interface SkillData {
  title: string;
  image: string;
  delay: number;
  duration: number;
  description: string;
}


const Skill: React.FC<SkillData> = ({ title, image, delay, duration, description }) => (
  <SkillCard
    initial={{ opacity: 0, transform: "translateY(80px)" }}
    whileInView={{ opacity: 1, transform: "translateY(0px)" }}
    transition={{ delay, duration }}
  >
    <div className="cardTitle">
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
    <Text>{description}</Text>
  </SkillCard>
);

const Skills: React.FC = () => {
  const {t} = useTranslation('skills');
  const skillsData: SkillData[] = [
    {
      title: t('design.title'),
      image: IMAGES.design,
      delay: 0.5,
      duration: 1,
      description: t('design.description'),
    },
    {
      title: t('code.title'),
      image: IMAGES.code,
      delay: 0.7,
      duration: 1.2,
      description: t('code.description'),
    },
    {
      title: t('experience.title'),
      image: IMAGES.experience,
      delay: 0.9,
      duration: 1.4,
      description: t('experience.description'),
    },
  ];
  
  return (
    <AnimatedContainer autoHeight>
      <Title alignEnd text={t('title')} />
      <SkillCardContainer>
        {skillsData.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </SkillCardContainer>
    </AnimatedContainer>
  );
};

export { Skills };
