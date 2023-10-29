import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  z-index: 40;
  padding: 0 50px;
  justify-content: space-between;
  transition: 0.5s ease;
  position: fixed;
  img {
    width: 50px;
  }
  @media (max-width: 600px) {
    padding: 0 30px;
    img {
      width: 40px;
    }
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  .themeContainer {
    display: flex;
  }
  .hamburger-react {
    color: ${(props) => props.theme.colors.primary};
    display: none;
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    width: 100%;
    .themeContainer {
      display: none;
    }
    .hamburger-react {
      display: flex;
    }
  }
`;
export const DesktopMenu = styled.ul`
  display: flex;
  text-transform: uppercase;
  gap: 30px;
  letter-spacing: 3px;
  align-items: center;
  list-style-type: none;
  color: ${(props) => props.theme.colors.primary};
  a, button {
    font-size: clamp(8px, 0.7vw, 12px);
    transition: 0.5s ease;
    opacity: 75%;
    cursor: pointer;
    &:hover {
      opacity: 100%;
    }
  }
  button{
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.primary}; 
    font-size: 16px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ThemeButton = styled.button<{ active: boolean }>`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  overflow: visible;
  opacity: ${(props) => (props.active ? 1 : 0.4)};
  svg {
    width: 20px;
    height: 20px;
    transition: 0.5s ease;
    path {
      stroke: ${(props) => props.theme.colors.primary};
      transition: 0.5s ease;
      fill: ${(props) =>
        props.active ? props.theme.colors.primary : "transparent"};
    }
  }
  &:hover {
    opacity: 1;
    svg {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
      transform: scale(1.2);
    }
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
  display: flex;

  .themeContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    svg {
      width: 40px;
      height: 40px;
    }
  }
  .menu-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0px;
    backdrop-filter: blur(10px);
    background-color: ${(props) => props.theme.colors.transparentBackground};
    top: 0px;
    list-style-type: none;
    flex-direction: column;
    justify-content: center;
    gap: 10vh;
    align-items: center;
    display: flex;
    opacity: 0;
    z-index: 39;
    li {
      font-size: clamp(14px, 5vw, 30px);
      letter-spacing: 8px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
`;
