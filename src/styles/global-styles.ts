import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: ${(props) => props.theme.colors.background};
  color: #FFFFFF;
  font-family: 'Roboto';
}
body::-webkit-scrollbar {
  width: 5px;
  border-radius: 5px;
}

body::-webkit-scrollbar-track {
  background: #101010;
}

body::-webkit-scrollbar-thumb {
  background: #555; 
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 5px;
}
`;

export const MainContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const GradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${(props) => props.theme.colors.backgroundGradient};
  z-index: 10;
`;

export const GeneralInfosContainer = styled.div`
  padding: 0 90px;
  max-width: 1700px;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  gap: 30vh;
  @media (max-width: 800px) {
    padding: 0 50px;
  }
  @media (max-width: 600px) {
    padding: 0 30px;
  }
`;