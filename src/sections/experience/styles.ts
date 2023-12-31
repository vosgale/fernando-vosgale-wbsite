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
    `thin solid ${props.active ? props.theme.colors.primary : "transparent"}`};
  padding: 15px;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  white-space: nowrap;
  background-color: ${(props) =>
    props.active ? `${props.theme.colors.backgroundVariant}` : "transparent"};
  cursor: pointer;
  transition: 0.5s ease;
  font-size: 14px;
  &:hover {
    border-right: thin solid ${(props) => props.theme.colors.primary};
  }
  @media (max-width: 800px) {
    border-right: none;
    border-bottom: ${(props) =>
      `thin solid ${
        props.active
          ? props.theme.colors.backgroundVariant
          : "rgb(53 53 53 / 34%)"
      }`};

    &:hover {
      border-right: none;
      border-bottom: thin solid
        ${(props) => props.theme.colors.backgroundVariant};
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  border-left: thin solid ${(props) => props.theme.colors.backgroundVariant};
  padding-left: 30px;
  overflow: hidden;
  @media (max-width: 800px) {
    padding-left: 30px;
    margin-top: 20px;
    margin-left: 8px;
  }
`;

export const TextContainer = styled(motion.div)`
  svg {
    width: 200px;
    height: auto;
    path {
      fill: ${(props) => props.theme.colors.primaryVariant};
    }
  }
  a {
    text-transform: uppercase;
    letter-spacing: 4px;
    cursor: pointer;
    transition: 0.5s ease;
    text-decoration: none;
    :visited{
      color: inherit;
    }
    &:hover{
      letter-spacing: 8px;
    }
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
