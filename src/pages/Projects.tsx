import ProjectCard from "@/components/ProjectCard";
import { useTranslation } from "react-i18next";
import { projects as projectData } from "@/data/projects";

const Projects = () => {
  const { t } = useTranslation();

  const projects = projectData.map((project) => ({
    ...project,
    title: t(`${project.id}_title`),
    description: t(`${project.id}_description`),
  }));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-10 text-center fade-in-down">{t("projectsPage.title")}</h1>
      <div className="flex flex-wrap justify-center gap-4 fade-in-up">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
