import { motion } from "framer-motion";
import styled from "styled-components";

export const Styledh2 = styled(motion.h2)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: clamp(18px, 2vw, 30px);
  font-weight: 400;
  span {
    color: ${(props) => props.theme.colors.primary};
  }
  letter-spacing: 5px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 48px;
  gap: 10px;
  &::after {
    content: "";
    display: block;
    width: clamp(100px, 27vw, 400px);
  
    height: 1px;
    background-image: linear-gradient(45deg, #ffffff00, #ffeeee)
  }
`;
