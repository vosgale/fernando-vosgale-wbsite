import { Button, Text } from "../../styles/styled-utils";
import AnimatedContainer from "../../Components/AnimatedContainer";
import { LineDecoration, TitleContainer } from "./styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
    const element = document.getElementById("0");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };
  const { t } = useTranslation('introduction');
  return (
    <AnimatedContainer>
      <TitleContainer>
        <Text
          initial="initial"
          whileInView="animate"
          variants={variants}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
        {t('hello')}
        </Text>
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
          {t('presentation')}
          </Text>
          <Button onClick={() => handleClickScroll()}>{t('button')}</Button>
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
