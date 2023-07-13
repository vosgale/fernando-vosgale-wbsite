import { motion } from "framer-motion";
import styled from "styled-components";

export const ExperienceContainer = styled.div`
  position: relative;
  z-index: 30;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 800px) {
    min-height: 100vh;
    height: auto;
    margin-bottom: 60px;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 30px;
  overflow-x: auto;
  padding-bottom: 15px;
`;
export const ButtonOption = styled.div<{ active?: boolean }>`
  letter-spacing: 4px;
  text-transform: uppercase;
  background: ${(props) => (props.active ? "#393939" : "transparent")};
  padding: ${(props) => (props.active ? "10px 20px" : "10px 5px")};
  color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-weight: 100;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.5s ease;
  @media (max-width: 800px) {
    font-size: 14px;
  }
  &:hover {
    background-color: #393939;
    padding: 10px 20px;
  }
`;

export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 50%;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  .description {
    margin-top: 56px;
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
  @media (max-width: 800px) {
    justify-content: center;
    img {
      width: 70%;
    }
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
