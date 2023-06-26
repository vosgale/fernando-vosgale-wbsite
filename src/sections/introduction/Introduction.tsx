import { AboutContainer, DownButton, TitleContainer } from "./styles";
import IMAGES from "../../Images";
import { motion } from "framer-motion";
import { Text } from "../../styles/global-styles";
export const Introduction = () => {
  const titleMotionConfig = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
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
            duration: 4,
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
            duration: 4,
            type: "tween",
          }}
        >
          Vosgale
        </motion.h2>

        <Text>
          Desenvolvedor de software especializado em criar (e projetar)
          experiências digitais únicas e autênticas!
        </Text>
      </TitleContainer>
      <DownButton><img src={IMAGES.downArrow}></img></DownButton>
    </AboutContainer>
  );
};
