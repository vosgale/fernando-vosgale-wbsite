import AnimatedContainer from "../../Components/AnimatedContainer";
import IMAGES from "../../Images";
import { FooterTitle } from "./styles";

export const Footer = () => {
  return (
    <AnimatedContainer autoHeight>
      <FooterTitle>
        <img src={IMAGES.footerLogo}></img>
      </FooterTitle>
    </AnimatedContainer>
  );
};
