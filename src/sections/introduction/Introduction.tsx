import { AboutContainer, DownButton, TitleContainer } from "./styles";
import IMAGES from "../../Images";
import { motion } from "framer-motion";
import { Text } from "../../styles/global-styles";
export const Introduction = () => {
  const titleMotionConfig = {
    initial: {
      opacity: 0,
      top: "-20px",
    },
    animate: {
      opacity: 1,
      top: 0,
    },
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
          initial="initial"
          animate="animate"
          transition={{
            delay: 1,
            duration: 2,
            type: "tween",
          }}
        >
          <small>Olá, eu sou o</small>
          Fernando
        </motion.h1>
        <motion.h2
          variants={titleMotionConfig}
          initial="initial"
          animate="animate"
          transition={{
            delay: 1.5,
            duration: 2,
            type: "tween",
          }}
        >
          Vosgale
        </motion.h2>

        <Text
          initial={{ opacity: 0, right: "-100px" }}
          animate={{ opacity: 1, right: 0 }}
          transition={{
            delay: 1.8,
            duration: 1.5,
            type: "tween",
          }}
        >
          Desenvolvedor de software especializado em criar (e projetar)
          experiências digitais únicas e autênticas!
        </Text>
      </TitleContainer>

      <DownButton
        initial={{ opacity: 0, bottom: "50px" }}
        animate={{ opacity: 1, bottom: "30px" }}
        transition={{
          delay: 1.8,
          duration: 1,
        }}
      >
        <img src={IMAGES.downArrow}></img>
      </DownButton>
    </AboutContainer>
  );
};
