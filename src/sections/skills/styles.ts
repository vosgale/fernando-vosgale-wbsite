import { motion } from "framer-motion";
import styled from "styled-components";

export const SkillCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  gap: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 30px;
  min-height: 450px;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
  justify-content: center;
  background-color: ${props=> props.theme.colors.backgroundVariant};
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    background-image: none;
  }
  .cardTitle {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  img {
    width: 30px;
  }
  h3 {
    font-weight: 100;
    font-size: 28px;
  }
`;
