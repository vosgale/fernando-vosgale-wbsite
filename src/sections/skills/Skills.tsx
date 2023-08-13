import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import { SkillCard, SkillCardContainer } from "./styles";

interface SkillData {
  title: string;
  image: string;
  delay: number;
  duration: number;
  description: string;
}
const skillsData = [
  {
    title: "Design",
    image: IMAGES.design,
    delay: 0.5,
    duration: 1,
    description: `gnissim eleifend lorem. Nulla sit amet gravida leo. Maecenas convallis, lacus ut elementum
    varius, mauris diam porta urna, at vestibulum lectus justo sit amet sem. Suspendisse quis
    finibus quam. Aliquam lectus urna, auctor eget consequat eu, consequat eu felis. Mauris eget
    lacus eget velit convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit. Praesent
    vitae pharetra justo, ut rutrum enim.`,
  },
  {
    title: "Code",
    image: IMAGES.code,
    delay: 0.7,
    duration: 1.2,
    description: `gnissim eleifend lorem. Nulla sit amet gravida leo. Maecenas convallis, lacus ut elementum
    varius, mauris diam porta urna, at vestibulum lectus justo sit amet sem. Suspendisse quis
    finibus quam. Aliquam lectus urna, auctor eget consequat eu, consequat eu felis. Mauris eget
    lacus eget velit convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit. Praesent
    vitae pharetra justo, ut rutrum enim.`,
  },
  {
    title: "Experience",
    image: IMAGES.experience,
    delay: 0.9,
    duration: 1.4,
    description: `gnissim eleifend lorem. Nulla sit amet gravida leo. Maecenas convallis, lacus ut elementum
    varius, mauris diam porta urna, at vestibulum lectus justo sit amet sem. Suspendisse quis
    finibus quam. Aliquam lectus urna, auctor eget consequat eu, consequat eu felis. Mauris eget
    lacus eget velit convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit. Praesent
    vitae pharetra justo, ut rutrum enim.`,
  },
];

const Skill = ({ title, image, delay, duration, description }: SkillData) => (
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

const Skills = () => {
  return (
    <AnimatedContainer autoHeight>
      <Title alignEnd text="So, I can help you with" />
      <SkillCardContainer>
        {skillsData.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </SkillCardContainer>
    </AnimatedContainer>
  );
};

export { Skills };
