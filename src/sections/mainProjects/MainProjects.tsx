import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import { MUIIcon, ReactIcon, TSIcon, ExpressIcon, NextJsIcon, TailwindIcon } from "./Icons";
import { ProjectItem, ProjectsContainer } from "./styles";

export const MainProjects = () => {
  const Projects = [
    {
      name: "Clubpetro CORE",
      description: `Sistema de gerenciamento de redes de postos de combustiveis, controle de clientes, analise de dados e muito mais!`,
      image: IMAGES.cpscreens, 
     icons: [MUIIcon, ReactIcon, TSIcon],
    },
    {
      name: "Fincheck",
      description: `O Fincheck, sistema de controle de finanças, foi desenvolvido durante o JSStack, contemplando além do frontend, aprendizados de backend com NodeJS.`,
      image: IMAGES.fincheck,
      icons: [ReactIcon, TSIcon, ExpressIcon],
    },
    {
      name: "Clapme OTTS",
      description: `As plataformas Over The Top referem-se a serviços de streaming. O CLAPME OTTS oferece ao cliente uma identidade visual própria, além de funcionalidades propostas pelo cliente como: listas de eventos, contagens regressivas, cadastro de clientes, captação de leads e muito mais!`,
      image: IMAGES.otts,
      icons: [TailwindIcon,ReactIcon, TSIcon, NextJsIcon],
    },
    {
      name: "Skolen",
      description: `
      Um ótimo sistema de gestão, que possibilita a gestão completa das escolas oferecendo dados e métricas de engajamento de alunos, professores, turmas, salas e muito mais!`,
      image: IMAGES.skolenScreens,
      icons: [MUIIcon, ReactIcon, TSIcon],
    },
  ];

  return (
    <AnimatedContainer>
      <>
        <Title number={3} text="Projetos" />
        <ProjectsContainer>
          {Projects.map((project, index) => (
            <ProjectItem
              key={project.name}
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1.5 }}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <img className="itemImage" src={project.image} />
              <div className="project-infos">
                <h2 className="itemTitle">{project.name}</h2>
                <div className="ItemInfos">
                  <Text>{project.description}</Text>
                </div>
                <div className="item-technologies">
                  {project.icons.map((Icon) => (
                    <Icon />
                  ))}
                </div>
              </div>
            </ProjectItem>
          ))}
        </ProjectsContainer>
      </>
    </AnimatedContainer>
  );
};
