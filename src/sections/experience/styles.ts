import { motion } from "framer-motion";
import styled from "styled-components";

export const ExperienceContainer = styled.div`
  position: relative;
  z-index: 30;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 65px;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .description {
    margin-top: 56px;
    letter-spacing: 1.6;
    line-height: 33px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 60px;
  img {
    width: 80%;
  }
`;

export const ButtonsContainer = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 30px;
`;
export const ButtonOption = styled.div<{ active?: boolean }>`
  letter-spacing: 4px;
  text-transform: uppercase;
  background: ${(props) => (props.active ? "#393939" : "transparent")};
  padding: ${(props) => (props.active ? "10px 20px" : "10px 0")};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: 100;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    background-color: #393939;
    padding: 10px 20px;
  }
`;

export const ExperienceDateContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  img {
    width: 20px;
    height: 20px;
  }
`;
