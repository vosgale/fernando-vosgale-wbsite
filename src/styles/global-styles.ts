import styled, { createGlobalStyle, keyframes } from "styled-components";
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
export default createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @media(max-width: 500px){
    ::-webkit-scrollbar { display: none; }
  }
}
input,
textarea,
button,
select,
a {
    -webkit-tap-highlight-color: transparent;
}

body{
  background-size: 400% 400%;
  background-color: ${(props) => props.theme.colors.background};
  background-image: ${(props) => props.theme.colors.backgroundGradient};
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Roboto';
  scroll-behavior: smooth;
  position: relative;
  a{
    color: inherit; 
  text-decoration: inherit; 
  }
  animation: ${backgroundAnimation} 30s ease-in-out infinite;
  @media (max-width: 500px) {
    background-size: 300% 150%;
    animation: ${backgroundAnimation} 15s ease infinite;

  }
 

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

export const GeneralInfosContainer = styled.div`
  padding: 0 90px;
  max-width: 1500px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 0 50px;
  }
  @media (max-width: 600px) {
    padding: 0 22px;
    gap: 10vh;
    margin: 0;
  }
`;
