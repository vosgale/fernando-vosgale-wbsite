import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterTitle = styled(motion.p)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 20px;
  img {
    width: 60px;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    opacity: 0.4;
    background: white;
  }
  &::before {
    background-image: linear-gradient(45deg, black, transparent);
  }
  &::after {
    background-image: linear-gradient(270 deg, black, transparent);
  }
`;

export const MadeBy = styled(motion.p)`
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 11px;
  margin-bottom: 20px;
`;

export const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 20px;
`;