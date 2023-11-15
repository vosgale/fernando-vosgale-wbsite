import AnimatedContainer from "../../Components/AnimatedContainer";
import Title from "../../Components/Title";
import IMAGES from "../../Images";
import { Text } from "../../styles/styled-utils";
import {
  MUIIcon,
  ReactIcon,
  TSIcon,
  ExpressIcon,
  NextJsIcon,
  TailwindIcon,
} from "./Icons";
import { ProjectItem, ProjectsContainer } from "./styles";
import { useTranslation } from "react-i18next";
export const MainProjects = () => {
  const { t } = useTranslation("mainProjects");
  const Projects = [
    {
      name: "Clubpetro CORE",
      description: t("clubpetro"),
      image: IMAGES.cpscreens,
      icons: [MUIIcon, ReactIcon, TSIcon],
    },
    {
      name: "Fincheck",
      description: t("fincheck"),
      image: IMAGES.fincheck,
      icons: [ReactIcon, TSIcon, ExpressIcon],
    },
    {
      name: "Clapme OTTS",
      description: t("clapme"),
      image: IMAGES.otts,
      icons: [TailwindIcon, ReactIcon, TSIcon, NextJsIcon],
    },
    {
      name: "Skolen",
      description: t("skolen"),
      image: IMAGES.skolenScreens,
      icons: [MUIIcon, ReactIcon, TSIcon],
    },
  ];

  return (
    <AnimatedContainer>
      <Title number={3} text="Projetos" />
      <ProjectsContainer>
        {Projects.map((project, index) => (
          <ProjectItem
            id={index === 0 ? "2": ""}
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
    </AnimatedContainer>
  );
};
