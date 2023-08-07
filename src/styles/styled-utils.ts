import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
const backgroundAnimation = keyframes`
0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`;

export const Text = styled(motion.p)`
  font-size: clamp(12px, 0.8vw, 16px);
  line-height: 22px;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 30;
  min-height: 110vh;
  justify-content: center;
`;

export const GradientBackground = styled.div`
  background-size: 400% 400%;
  height: 100vh;
  background-repeat: no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.theme.colors.backgroundGradient};
  animation: ${backgroundAnimation} 10s ease infinite;
  @media (max-width: 500px) {
    background-size: 300% 150%;
    animation: ${backgroundAnimation} 15s ease infinite;
    background-image: linear-gradient(
      278deg,
      rgb(1, 1, 1) 20.38%,
      rgba(21, 21, 21, 0.8) 74.15%
    );
  }
`;
