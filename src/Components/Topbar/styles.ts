import styled from "styled-components";

export const TopbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 40;
  padding: 0 50px;
  justify-content: space-between;
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

export const DesktopMenu = styled.ul`
  display: flex;
  text-transform: uppercase;
  gap: 30px;
  letter-spacing: 3px;
  list-style-type: none;
  a {
    font-size: clamp(8px, 0.7vw, 12px);
    transition: 0.5s ease;
    opacity: 75%;
    cursor: pointer;
    &:hover {
      opacity: 100%;
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
  display: flex;
  .menu-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgb(0 0 0 / 39%);
    left: 0px;
    backdrop-filter: blur(10px);
    top: 0px;
    list-style-type: none;
    flex-direction: column;
    justify-content: center;
    gap: 10vh;
    align-items: center;
    display: flex;
    opacity: 0;

    li {
      font-size: clamp(14px, 5vw, 30px);
      letter-spacing: 8px;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .hamburger-react {
    z-index: 50;
  }
`;
