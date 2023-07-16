import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Container, Text } from "../../styles/styled-utils";
import {
  CarouselButtonsContainer,
  CarouselDescription,
  CarouselImages,
  RepositoriesContainer,
} from "./styles";

export const Repositories = () => {
  return (
    <Container>
      <Title number={4} text="Repositórios" />

      <RepositoriesContainer>
        <CarouselDescription>
          <CarouselButtonsContainer>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </CarouselButtonsContainer>
          <Text>
            Significant contributions to the management system of ClubPetro, a
            company responsible for accelerating results in more than 1,200 gas
            stations in Brazil. A complete administrative system that handles
            all flows of registration and management of users, posts, programs
            and faithfulness.
          </Text>
        </CarouselDescription>
        <CarouselImages>
          <img src={IMAGES.cpDashboard}></img>
        </CarouselImages>
      </RepositoriesContainer>
    </Container>
  );
};
