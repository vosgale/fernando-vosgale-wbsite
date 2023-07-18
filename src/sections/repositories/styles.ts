import styled from "styled-components";

export const RepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
  gap: 10%;
  @media(max-width: 600px){
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

export const CarouselDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  text-align: end;
  @media(max-width: 600px){
    align-items: flex-start;
    text-align: start;
  }
`;

export const CarouselButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
export const CarouselButton = styled.div<{ active: boolean }>`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  transition: 0.5s ease;
  cursor: pointer;
  border: thin solid ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
export const CarouselImages = styled.div`
  display: flex;
  position: relative;
  img {
    width: 600px;
  }
  @media(max-width: 600px){
    img {
    width: 100%;
  }
  }
`;
