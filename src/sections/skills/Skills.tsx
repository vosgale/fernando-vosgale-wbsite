import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import { SkillCard, SkillCardContainer } from "./styles";

export const Skills = () => {
  return (
    <AnimatedContainer autoHeight>
      <Title text="I can help you with"></Title>
      <SkillCardContainer>
        <SkillCard>
          <div className="cardTitle">
            <h3>Design</h3>
            <img src={IMAGES.design}></img>
          </div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
            odio, aliquet at augue et, dignissim eleifend lorem. Nulla sit amet
            gravida leo. Maecenas convallis, lacus ut elementum varius, mauris
            diam porta urna, at vestibulum lectus justo sit amet sem.
            Suspendisse quis finibus quam. Aliquam lectus urna, auctor eget
            consequat eu, consequat eu felis. Mauris eget lacus eget velit
            convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit.
            Praesent vitae pharetra justo, ut rutrum enim.
          </Text>
        </SkillCard>
        <SkillCard>
          <div className="cardTitle">
            <h3>Code</h3>
            <img src={IMAGES.code}></img>
          </div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
            odio, aliquet at augue et, dignissim eleifend lorem. Nulla sit amet
            gravida leo. Maecenas convallis, lacus ut elementum varius, mauris
            diam porta urna, at vestibulum lectus justo sit amet sem.
            Suspendisse quis finibus quam. Aliquam lectus urna, auctor eget
            consequat eu, consequat eu felis. Mauris eget lacus eget velit
            convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit.
            Praesent vitae pharetra justo, ut rutrum enim.
          </Text>
        </SkillCard>
        <SkillCard>
          <div className="cardTitle">
            <h3>Experience</h3>
            <img src={IMAGES.experience}></img>
          </div>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
            odio, aliquet at augue et, dignissim eleifend lorem. Nulla sit amet
            gravida leo. Maecenas convallis, lacus ut elementum varius, mauris
            diam porta urna, at vestibulum lectus justo sit amet sem.
            Suspendisse quis finibus quam. Aliquam lectus urna, auctor eget
            consequat eu, consequat eu felis. Mauris eget lacus eget velit
            convallis iaculis. Sed rhoncus tortor ac nulla lacinia blandit.
            Praesent vitae pharetra justo, ut rutrum enim.
          </Text>
        </SkillCard>
      </SkillCardContainer>
    </AnimatedContainer>
  );
};
