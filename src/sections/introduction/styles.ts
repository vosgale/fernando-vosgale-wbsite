import { motion } from "framer-motion";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: ${(props) => props.theme.colors.primary};
  .hello {
    font-size: clamp(14px, 0.8vw, 22px);;
    font-weight: 100;
  }
  .introduction-description {
    margin-top: 20px;
  }
  .introduction-descriptionContainer {
    align-self: flex-end;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
  h3 {
    font-size: clamp(38px, 6vw, 100px);
    letter-spacing: clamp(10px, 2vw, 30px);
    font-weight: 100;
    width: 100%;
    position: relative;
  }
  @media (max-width: 400px) {
    br {
      display: none;
    }
  }
`;
export const LineDecoration = styled(motion.div)`
    width: 52vw;
    height: 1px;
    position: absolute;
    bottom: 12vh;
    right: -16vw;
    background-image: linear-gradient(290deg, white, transparent);
`;