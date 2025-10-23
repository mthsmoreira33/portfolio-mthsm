import React, { useState, useEffect } from "react";
import profileImage from "../assets/mthsm.jpg";
import { useTranslation } from "react-i18next";
import { getAge } from "@/lib/utils";
import Projects from "./Projects";
import Contact from "./Contact";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const age = getAge("30/01/2000");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    // Set initial value
    setIsDarkMode(document.body.classList.contains("dark"));
    return () => observer.disconnect();
  }, []);

  const techStack = [
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "C#",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Tailwind",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "PostgreSQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <img
        src={profileImage}
        alt="Placeholder"
        className="w-40 h-42 mb-4 rounded-full fade-in-down"
      />
      <div className="max-w-2xl p-5 mx-auto rounded-lg shadow-md bg-card text-card-foreground fade-in-up">
        <h1 className="mb-2 text-3xl font-bold text-center">{t("aboutMe")}</h1>
        <p className="text-xl text-justify">{t("description", { age })}</p>
      </div>
      <div className="mt-8 w-full max-w-4xl fade-in-up">
        <h2 className="text-xl font-bold text-center pb-4">{t("mainStack")}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <img src={tech.image} alt={tech.name} className="w-15 h-15" />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-30">
        <Projects />
      </div>
      <div className="w-full">
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Home;
