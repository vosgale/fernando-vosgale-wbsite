import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutMeContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 30;
  padding-top: 100px;
  align-items: baseline;
  flex-direction: column;
  overflow: hidden;
  @media (max-width: 900px) {
    margin-bottom: 60px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const AboutText = styled(motion.div)`
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
  @media (max-width: 800px) {
    width: 100%;
    ul{
      li{
        p{
          font-size: 11px;
          line-height: normal;
        }
      }
    }
  }
`;

export const ProfileImage = styled(motion.img)`
  width: clamp(300px, 30vw, 380px);
  height: clamp(300px, 30vw, 380px);
  object-fit: cover;
  align-self: center;
  border-radius: 50%;
  @media (max-width: 500px) {
    width: 60vw;
    height: 60vw;
    margin-top: 50px;
  }
`;
