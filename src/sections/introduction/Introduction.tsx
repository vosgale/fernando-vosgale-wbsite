import { Button, Text } from "../../styles/styled-utils";
import AnimatedContainer from "../../Components/AnimatedContainer";
import { LineDecoration, TitleContainer } from "./styles";
import { motion } from "framer-motion";

export const Introduction = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <AnimatedContainer>
      <TitleContainer>
        <motion.p
          initial="initial"
          whileInView="animate"
          variants={variants}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="hello"
        >
          Olá! eu sou o
        </motion.p>
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={variants}
          transition={{ delay: 1.4, duration: 1.5 }}
        >
          FERNANDO
          <br />
          &nbsp; &nbsp; VOSGALE
        </motion.h3>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={variants}
          transition={{ delay: 2, duration: 1.5 }}
          className="introduction-descriptionContainer"
        >
          <Text className="introduction-description">
            Desenvolvedor <b>Front-end</b> especializado em criar e projetar
            experiências digitais únicas!
          </Text>
          <Button onClick={() => handleClickScroll()}>Ver mais</Button>
        </motion.div>
      </TitleContainer>
      <LineDecoration
        initial={{ transform: "translateX(100vw)" }}
        animate={{ transform: "translateX(0)" }}
        transition={{ delay: 1.8, duration: 2.5 }}
      />
    </AnimatedContainer>
  );
};
