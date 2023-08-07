import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  img {
    width: 100%;
  }
  @media (max-width: 800px) {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TitleContainer = styled.div`
  gap: 30px;
  width: 60%;
  z-index: 30;
  overflow: hidden;
  display: flex;
  position: absolute;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 100%;
    text-align: start;
    padding: 0 30px;
    gap: 10px;
  }
  h1,
  h2 {
    text-transform: uppercase;
    font-size: clamp(45.5px, 4.5vw, 76px);
    letter-spacing: clamp(14.5px, 1.5vw, 37.5px);
    font-weight: 400;
    width: 100%;
    position: relative;

    @media (max-width: 350px) {
      font-size: 28px;
    }
  }
  h1 {
    small {
      font-size: clamp(10px, 0.5vw, 20px);
      letter-spacing: 5px;
      display: flex;
      margin-bottom: 5px;
      flex-direction: column;
    }
  }
  h2 {
    color: ${(props) => props.theme.colors.secondary};
    text-align: end;
    @media (max-width: 350px) {
      text-align: start;
    }
  }

  p {
    font-size: 12px;
    max-width: 350px;
    align-self: flex-end;
    text-align: end;
    line-height: normal;
    line-height: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    @media (max-width: 800px) {
      margin-top: 30px;
      align-self: flex-start;
      text-align: start;
    }
  }
`;

export const DownButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  position: absolute;
  margin: 0px auto;
  bottom: 30px;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  border: thin solid white;
  height: 40px;
  width: 40px;
  transition: 0.5s;
  img {
    width: 18px;
    height: unset !important;
  }
  &:hover {
    box-shadow: 1px 0px 6px 1px #bababa;
    background-color: white;
    border: thin solid transparent;
    img {
      filter: invert();
    }
  }
`;
export const CircleDecoration = styled(motion.div)`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  position: absolute;
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.5),
    10px 10px 20px rgba(0, 0, 0, 0.2);
`;
