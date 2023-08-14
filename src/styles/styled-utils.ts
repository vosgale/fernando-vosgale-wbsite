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
export const Button = styled.button`
  margin-top: 20px;
  display: inline-block;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 10px 32px;
  text-transform: uppercase;
  transform: skewX(-10deg);
  transition: 0.7s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: -5px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
    width: 0%;
    height: 110%;
    z-index: -1;
    transition: 0.7s ease;
  }
  &:hover {
    color: ${(props) => props.theme.colors.background} !important;
    transform: scale(1.05) skewX(-10deg);
    &::after {
      opacity: 1;
      width: 120%;
    }
  }
`;


