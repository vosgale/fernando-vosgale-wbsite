import { Button, Text } from "../../styles/styled-utils";
import AnimatedContainer from "../../Components/AnimatedContainer";
import { LineDecoration, TitleContainer } from "./styles";
export const Introduction = () => {

  // const handleClickScroll = () => {
  //   const element = document.getElementById("section-1");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <AnimatedContainer>
      <TitleContainer>
        <p className="hello">Olá! eu sou o</p>
        <h3>
          FERNANDO
          <br />
          &nbsp; &nbsp; VOSGALE
        </h3>
        <div className="introduction-descriptionContainer">
          <Text className="introduction-description">
            Desenvolvedor <b>FrontEnd</b> especializado em criar e projetar
            eperiencias digitais unicas!
          </Text>
          <Button>Know More</Button>
        </div>
      </TitleContainer>
      <LineDecoration/>
    </AnimatedContainer>
  );
};
