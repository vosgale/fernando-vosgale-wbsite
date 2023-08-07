import { motion } from "framer-motion";
import styled from "styled-components";

export const Text = styled(motion.p)`
  font-size: clamp(12px, 0.9vw, 16px);
  line-height: 1.7;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
  min-height: 80vh;
  justify-content: center;
`;
