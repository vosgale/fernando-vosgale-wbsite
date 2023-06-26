import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 30;
  padding-top: 100px;
  height: 100vh;
  align-items: baseline;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 500px) {
    height: auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const AboutText = styled(motion.div)`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
  ul {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ProfileImage = styled(motion.img)`
  width: 380px;
  height: 380px;
  object-fit: cover;
  align-self: center;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
    margin-top: 50px;
  }
`;
