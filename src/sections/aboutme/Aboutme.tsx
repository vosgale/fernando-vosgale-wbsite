import Title from "../../Components/Title";
import { AboutText, ContentContainer, ProfileImageContainer } from "./styles";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import AnimatedContainer from "../../Components/AnimatedContainer";
import { useTranslation } from "react-i18next";
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
      opacity: 1,
      transition: { duration: 1.5, delay: 0.7 },
    },
  };
  const { t } = useTranslation('aboutme');
  return (
    <AnimatedContainer>
      <Title number={1} text={t('title')} />
      <ContentContainer>
        <AboutText
          variants={AboutVariants}
          initial="TextInitial"
          viewport={{ once: true }}
          whileInView="TextInView"
          id="section-1"
        >
          <Text>
            {t('description1')}
          </Text>
          <Text>
          {t('description2')}
          </Text>
          <Text>
          {t('description3')}
          </Text>
        </AboutText>
        <ProfileImageContainer
          variants={AboutVariants}
          viewport={{ once: true }}
          whileInView="ImageInView"
          initial="ImageInitial"
        >
          <img
            className="profile-image"
            src={IMAGES.profile}
            alt="Fernando Vosgale"
          ></img>
          <ul>
            <li>
              <img src={IMAGES.hat}></img>{" "}
              <Text>{t('systemAnalisis')}</Text>
            </li>
            <li>
              <img src={IMAGES.spot}></img> <Text>Guarapuava-PR</Text>
            </li>
          </ul>
        </ProfileImageContainer>
      </ContentContainer>
    </AnimatedContainer>
  );
};
