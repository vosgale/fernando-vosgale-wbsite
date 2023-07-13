import { AboutContainer, DownButton, TitleContainer } from "./styles";
import IMAGES from "../../Images";
import { motion } from "framer-motion";
import { Text } from "../../styles/styled-utils";
export const Introduction = () => {
  const titleMotionConfig = {
    initialh1: {
      opacity: 0,
      right: "-20px",
    },

    animateh1: {
      opacity: 1,
      right: "0px",
    },

    initialh2: {
      opacity: 0,
      left: "-20px",
    },
    animateh2: {
      opacity: 1,
      left: "0px",
    },
  };
  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AboutContainer>
      <motion.img
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 0.5 }}
        transition={{
          delay: 2,
          duration: 2,
          type: "tween",
        }}
        src={IMAGES.image1}
        alt="background"
      />
      <TitleContainer>
        <motion.h1
          variants={titleMotionConfig}
          initial="initialh1"
          animate="animateh1"
          transition={{
            delay: 0.8,
            duration: 2,
          }}
        >
          <small>Olá, eu sou o</small>
          Fernando
        </motion.h1>
        <motion.h2
          variants={titleMotionConfig}
          initial="initialh2"
          animate="animateh2"
          transition={{
            delay: 0.8,
            duration: 2,
          }}
        >
          Vosgale
        </motion.h2>

        <Text
          variants={titleMotionConfig}
          initial="initialh2"
          animate="animateh2"
          transition={{
            delay: 0.8,
            duration: 2,
          }}
        >
          Desenvolvedor de software especializado em criar (e projetar)
          experiências digitais únicas e autênticas!
        </Text>
      </TitleContainer>

      <DownButton
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => handleClickScroll()}
        transition={{
          delay: 3,
          duration: 2,
        }}
      >
        <img src={IMAGES.downArrow}></img>
      </DownButton>
    </AboutContainer>
  );
};
