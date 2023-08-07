import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import { ProjectItem, ProjectsContainer } from "./styles";

export const MainProjects = () => {
  const Projects = [
    {
      name: "Clubpetro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    tincidunt eget lectus id luctus. Donec quis mauris sed augue pretium
    mattis quis ac urna. Maecenas rutrum tortor sapien, sed interdum
    tortor elementum vitae. Aliquam elementum..`,
    },
    {
      name: "Clubpetro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    tincidunt eget lectus id luctus. Donec quis mauris sed augue pretium
    mattis quis ac urna. Maecenas rutrum tortor sapien, sed interdum
    tortor elementum vitae. Aliquam elementum..`,
    },
    {
      name: "Clubpetro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    tincidunt eget lectus id luctus. Donec quis mauris sed augue pretium
    mattis quis ac urna. Maecenas rutrum tortor sapien, sed interdum
    tortor elementum vitae. Aliquam elementum..`,
    },
    {
      name: "Clubpetro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
    tincidunt eget lectus id luctus. Donec quis mauris sed augue pretium
    mattis quis ac urna. Maecenas rutrum tortor sapien, sed interdum
    tortor elementum vitae. Aliquam elementum..`,
    },
  ];

  return (
    <AnimatedContainer>
      <>
        <Title number={3} text="Projetos" />
        <ProjectsContainer>
          {Projects.map((project, index) => (
            <ProjectItem
              initial={{ opacity: 0, transform: "translateY(10px)" }}
              whileInView={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1.5 }}
              direction={index % 2 === 0 ? "right" : "left"}
            >
              <img className="itemImage" src={IMAGES.cpDashboard} />
              <div className="project-infos">
                <h2 className="itemTitle">{project.name}</h2>
                <div className="ItemInfos">
                  <Text>{project.description}</Text>
                </div>
                <div className="item-technologies">
                  <img src={IMAGES.materialUi}></img>
                  <img src={IMAGES.ts}></img>
                  <img src={IMAGES.react}></img>
                </div>
              </div>
            </ProjectItem>
          ))}
        </ProjectsContainer>
      </>
    </AnimatedContainer>
  );
};
