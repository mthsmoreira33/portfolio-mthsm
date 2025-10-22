import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  description: string;
  image: string;
  staticImage?: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 w-full sm:w-[45%] md:w-[45%] lg:w-[30%] transition-transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? project.image : project.staticImage}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
        <a
          href={project.link}
          className="text-blue-500 hover:underline mt-4 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("viewProject")}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
