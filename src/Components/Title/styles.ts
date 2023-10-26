import { motion } from "framer-motion";
import styled from "styled-components";

export const Styledh2 = styled(motion.h2)<{ alignEnd?: boolean }>`
  color: ${(props) => props.theme.colors.primary};
  font-size: clamp(18px, 2vw, 30px);
  font-weight: 100;
  span {
    color: ${(props) => props.theme.colors.primary};
    position: absolute;
    font-size: 100px;
    top: -50px;
    font-weight: bold;
    opacity: 0.2;
    z-index: 1;
    left: -10px;
  }
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 48px;
  gap: 20px;
  justify-content: ${(props) => props.alignEnd && "flex-end"};
  &::after {
    content: "";
    display: block;
    width: clamp(100px, 27vw, 400px);
    height: 1px;
    background-image: ${(props) =>
      `linear-gradient(280deg, #ffffff00, ${props.theme.colors.secondary})`};
  }
`;
