import { SplashScreenContainer } from "./styles";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
export const SplashScreen = ({ isLoading }: { isLoading: boolean }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgb(255 255 255 / 0%)",
    },
    Fvisible: {
      pathLength: 1,
      stroke: "#F8F8F8",
      fill: "#F8F8F8",
      transition: {
        duration: "3",
        fill: {
          delay: "3",
        },
      },
    },
    Vvisible: {
      pathLength: 1,
      stroke: "#B7B6B6",
      fill: "#B7B6B6",
      transition: {
        duration: "3",
        fill: {
          delay: "3",
        },
      },
    },
  };
  return (
    <AnimatePresence>
      {isLoading && (
        <SplashScreenContainer
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ duration: 0.4, type: "tween" }}
        >
          <svg
            width="200"
            height="auto"
            viewBox="0 0 92 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={icon}
              initial="hidden"
              animate="Fvisible"
              d="M62.9443 0V0.0265328L53.7532 11.5222H15.624V29.4962H39.3851L30.1749 41.0184H15.624V65H0V0H62.9443Z"
              fill="#F8F8F8"
              fill-opacity="0.7"
            />
            <motion.path
              variants={icon}
              fill="#B7B6B6"
              d="M93.9999 0.537109L59.7116 64.9996H45.2644L40.6427 56.295L32.7075 41.3595L35.6154 37.7228L41.9648 29.7791L49.7006 44.9646L52.8105 51.0655L67.39 22.836L72.9769 12.0182L78.905 0.537109H93.9999Z"
              initial="hidden"
              animate="Vvisible"
            />
          </svg>
        </SplashScreenContainer>
      )}
    </AnimatePresence>
  );
};
