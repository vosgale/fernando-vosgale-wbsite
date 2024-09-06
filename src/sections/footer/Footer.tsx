import { IconButton, Link } from "@mui/material";
import IMAGES from "../../Images";
import { FooterTitle, MadeBy, FooterContainer, ContactInfos } from "./styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
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
      <ContactInfos>
        <Link href="https://w.app/IA7NfU" target="_blank">
          <IconButton>
            <WhatsAppIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com/in/fernando-vosgale-968b131b2" target="_blank">
          <IconButton>
            <LinkedInIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
        <Link  href="https://mail.google.com/mail/?view=cm&fs=1&to=vosgale762@gmail.com" target="_blank">
          <IconButton>
            <EmailIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Link>
      </ContactInfos>
    </FooterContainer>
  );
};
