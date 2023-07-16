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
  background-size: 200% 200%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  width: 100vw;
  background-image: ${(props) => props.theme.colors.backgroundGradient};
  animation: ${backgroundAnimation} 30s ease infinite;
  height: 100%;
  @media (max-width: 500px) {
    background-size: 120% 120%;
    padding-bottom: 150px;
    animation: ${backgroundAnimation} 15s ease infinite;
  }
`;
