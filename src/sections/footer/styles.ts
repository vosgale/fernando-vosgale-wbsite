import styled from "styled-components";

export const FooterTitle = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 20vh 0px 5vh;

  gap: 20px;
  img {
    width: 70px;
  }
  &::before,
  &::after {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    opacity: 0.4;
    background: white;
  }
  &::before {
    background-image: linear-gradient(45deg, black, transparent);
  }
  &::after {
    background-image: linear-gradient(270 deg, black, transparent);
  }
  @media(max-width: 600px){
    margin: 10vh 0;
  }
`;

export const ContactButton = styled.button`
  margin-top: 20px;
  display: inline-block;
  background: transparent;
  color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 10px 32px;
  text-transform: uppercase;
  transform: skewX(-10deg);
  transition: 0.7s ease;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: -5px;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 3px;
    width: 0%;
    height: 110%;
    z-index: -1;
    transition: 0.7s ease;
  }
  &:hover {
    color: ${(props) => props.theme.colors.background} !important;
    transform: scale(1.05) skewX(-10deg);
    &::after {
      opacity: 1;
      width: 120%;
    }
  }
`;
