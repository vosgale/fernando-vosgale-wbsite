import { motion } from "framer-motion";
import styled from "styled-components";

export const SplashScreenContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: fixed;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 186px;
    overflow: visible;
  }
`;
