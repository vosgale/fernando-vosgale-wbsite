import { motion } from "framer-motion";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  height: 280px;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 0;
    height: auto;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: flex-start;
  padding-bottom: 15px;
  @media (max-width: 800px) {
    flex-direction: row;
    overflow-x: auto;
  }
`;
export const ButtonOption = styled.div<{ active?: boolean }>`
  letter-spacing: 4px;
  text-transform: uppercase;
  border-right: ${(props) =>
    props.active ? "thin solid #393939" : "thin solid rgb(53 53 53 / 34%)"};
  padding: 15px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  font-weight: 100;
  white-space: nowrap;
  background-color: ${(props) => (props.active ? "#3939394f" : "transparent")};
  cursor: pointer;
  transition: 0.5s ease;
  font-size: 14px;
  &:hover {
    border-right: thin solid #393939;
  }
  @media (max-width: 800px) {
    border-right: none;
    border-bottom: ${(props) =>
      props.active ? "thin solid #393939" : "thin solid rgb(53 53 53 / 34%)"};

    &:hover {
      border-right: none;
      border-bottom: thin solid #393939;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  border-left: thin solid #282727;
  padding-left: 30px;
  overflow: hidden;
  @media (max-width: 800px) {
    padding-left:30px;
    margin-top: 20px;
    margin-left: 8px;
  }
`;

export const TextContainer = styled(motion.div)`
  img {
    width: 200px;
  }
  h3 {
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  padding-top: 15px;
  display: flex;
  gap: 15px;
  flex-direction: column;
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
