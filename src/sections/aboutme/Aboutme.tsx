import Title from "../../Components/Title";
import {
  AboutText,
  ContentContainer,
  ProfileImage,
} from "./styles";
import IMAGES from "../../Images";
import { Container, Text } from "../../styles/styled-utils";
export const Aboutme = () => {
  const AboutVariants = {
    TextInitial: { opacity: 0 },
    TextInView: {
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    },
    ImageInitial: {
      opacity: 0,
    },
    ImageInView: {
      opacity: 0.6,
      transition: { duration: 1.5, delay: 0.7 },
    },
  };
  return (
    <Container id="section-1" style={{paddingTop: "10vh"}}>
      <Title number={1} text="Sobre" />
      <ContentContainer>
        <AboutText
          variants={AboutVariants}
          initial="TextInitial"
          viewport={{ once: true }}
          whileInView="TextInView"
        >
          <Text>
            I am a software developer specializing in Frontend with a focus on
            the React/Node ecosystem. I have a degree inSystems Analysis and
            Development and have three years of professional experience.
          </Text>
          <Text>
            I always liked design and technology, which inspired me to become a
            Frontend developer. The area unites the twothings I like the most
            and this way programming becomes much more than just a job for me.
          </Text>
          <Text>
            The passion I have for design is a great asset as a Frontend
            developer, because it allows me to keep my work upto date with
            market trends and user needs, which gives me a great commitment to
            deliver amazing experiencesfor the people who use the products I
            develop.
          </Text>

          <ul>
            <li>
              <img src={IMAGES.hat}></img>{" "}
              <Text>Análise e Desenvolvimento de Sistemas</Text>
            </li>
            <li>
              <img src={IMAGES.spot}></img> <Text>Guarapuava-PR</Text>
            </li>
          </ul>
        </AboutText>
        <ProfileImage
          variants={AboutVariants}
          viewport={{ once: true }}
          whileInView="ImageInView"
          initial="ImageInitial"
          src={IMAGES.profile}
          alt="Fernando Vosgale"
        ></ProfileImage>
      </ContentContainer>
    </Container>
  );
};
