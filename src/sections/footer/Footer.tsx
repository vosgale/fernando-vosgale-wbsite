import IMAGES from "../../Images";
import { Container, Text } from "../../styles/styled-utils";
import { FooterContainer } from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <img src={IMAGES.footerLogo}></img>
      <div className="footer_content">
        <h3>Thank you for visit me</h3>
        <Text>
          If you are interested in my work, send-me and email and i will reply
          son as posible
        </Text>
        <button>Click to send e-mail</button>
      </div>
    </FooterContainer>
  );
};
