import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          projects: "Projects",
          contacts: "Contacts",
          aboutMe: "About Me",
          description:
            "Hello, I'm Matheus Moreira Lima, a {{age}}-year-old FullStack Developer with experience in Java, C#, Express JS and React. Passionate about creating efficient and scalable solutions, always looking to learn and apply the best development practices. I also have knowledge in AWS, Azure and Google Cloud Platform. Trilingual, fluent in Portuguese, English and Spanish.",
          projectsPage: {
            title: "Projects",
          },
          project1_title: "Project 1",
          project1_description: "This is a description of project 1.",
          project2_title: "Project 2",
          project2_description: "This is a description of project 2.",
          project3_title: "Project 3",
          project3_description: "This is a description of project 3.",
          project4_title: "Project 4",
          project4_description: "This is a description of project 4.",
          viewProject: "View Project",
          mainStack: "My Main Stack",
          contactsPage: {
            title: "Contacts",
            github: "Github",
            instagram: "Instagram",
            linkedin: "Linkedin"
          }
        },
      },
      pt: {
        translation: {
          home: "Início",
          projects: "Projetos",
          contacts: "Contatos",
          aboutMe: "Sobre Mim",
          description:
            "Olá, eu sou Matheus Moreira Lima, um Desenvolvedor FullStack de {{age}} anos com experiência em Java, C#, Express JS e React. Apaixonado por criar soluções eficientes e escaláveis, sempre buscando aprender e aplicar as melhores práticas de desenvolvimento. Também possuo conhecimento em AWS, Azure e Google Cloud Platform. Trilíngue, com fluência em Português, Inglês e Espanhol.",
          projectsPage: {
            title: "Projetos",
          },
          project1_title: "Projeto 1",
          project1_description: "Esta é a descrição do projeto 1.",
          project2_title: "Projeto 2",
          project2_description: "Esta é a descrição do projeto 2.",
          project3_title: "Projeto 3",
          project3_description: "Esta é a descrição do projeto 3.",
          project4_title: "Projeto 4",
          project4_description: "Esta é a descrição do projeto 4.",
          viewProject: "Ver Projeto",
          mainStack: "Minhas Principais Tecnologias",
          contactsPage: {
            title: "Contatos",
            github: "Github",
            instagram: "Instagram",
            linkedin: "Linkedin"
          }
        },
      },
    },
  });

export default i18n;
