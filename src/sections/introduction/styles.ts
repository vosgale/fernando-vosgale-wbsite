import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  img {
    width: 100%;
    position: relative;
  }
  @media (max-width: 800px) {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const TitleContainer = styled.div`
  gap: 30px;
  width: 60%;
  z-index: 30;
  display: flex;
  position: absolute;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 100%;
    text-align: start;
    padding: 0 30px;
    gap: 10px;
  }
  h1,
  h2 {
    text-transform: uppercase;
    font-size: clamp(35.5px, 4.5vw, 76px);
    letter-spacing: clamp(14.5px, 1.5vw, 37.5px);
    font-weight: 400;
    width: 100%;
    @media (max-width: 350px) {
      font-size: 30px;
    }
  }
  h1 {
    small {
      font-size: clamp(10px, 0.5vw, 20px);
      letter-spacing: 5px;
      display: flex;
      margin-bottom: 5px;
      flex-direction: column;
    }
  }
  h2 {
    color: ${(props) => props.theme.colors.secondary};
    text-align: end;
    @media (max-width: 800px) {
      text-align: start;
    }
  }

  p {
    font-size: 12px;
    max-width: 540px;
    align-self: flex-end;
    text-align: end;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 10px;
    &::before {
      content: "";
      display: block;
      width: 270px;
      height: 1px;
      background-image: linear-gradient(90deg, white, transparent);
      opacity: 0.7;
    }
    @media (max-width: 800px) {
      margin-top: 30px;
      align-self: flex-start;
      text-align: start;
      &::before {
        display: none;
      }
    }
  }
`;

export const DownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  position: absolute;
  bottom: 30px;
  margin: 0px auto;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  border: thin solid white;
  height: 38px;
  width: 40px;
  
  transition: 0.5s ease;
  img {
    width: 18px;
    height: unset !important;
  }
  &:hover {
    box-shadow: 1px 0px 6px 1px #bababa;
    background-color: white;
    border: thin solid transparent;
    img {
      filter: invert();
    }
  }
`;
