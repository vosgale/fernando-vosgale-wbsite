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
  justify-content: center;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    background-image: none;
    min-height: 350px;
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
