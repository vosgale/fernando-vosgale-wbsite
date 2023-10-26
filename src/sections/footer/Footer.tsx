import IMAGES from "../../Images";
import { FooterTitle, MadeBy, FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeIn" }}
      >
        <img src={IMAGES.footerLogo}></img>
      </FooterTitle>
      <MadeBy
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeIn" }}
      >
        Designed and coded by Fernando Vosgale
      </MadeBy>
    </FooterContainer>
  );
};
