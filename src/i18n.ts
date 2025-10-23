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
          project1_title: "PC Dev",
          project1_description:
            "Job Board web application focused on tech jobs for PwD. Created with React, Java Spring Boot and PostgreSQL.",
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
            linkedin: "Linkedin",
            email: "Email",
            form: {
              name: "Name",
              nameRequired: "Name is required",
              email: "Email",
              emailRequired: "A valid email is required",
              message: "Message",
              messageRequired: "Message is required",
              submit: "Submit",
            },
          },
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
          project1_title: "PC Dev",
          project1_description:
            "Aplicação web de vagas de emprego focada em vagas tech para PcD. Criada com React, Java Spring Boot e PostgreSQL.",
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
            linkedin: "Linkedin",
            email: "Email",
            form: {
              name: "Nome",
              nameRequired: "O nome é obrigatório",
              email: "Email",
              emailRequired: "Um email válido é obrigatório",
              message: "Mensagem",
              messageRequired: "A mensagem é obrigatória",
              submit: "Enviar",
            },
          },
        },
      },
      es: {
        translation: {
          home: "Inicio",
          projects: "Proyectos",
          contacts: "Contactos",
          aboutMe: "Sobre Mí",
          description:
            "Hola, soy Matheus Moreira Lima, un Desarrollador FullStack de {{age}} años con experiencia en Java, C#, Express JS y React. Apasionado por crear soluciones eficientes y escalables, siempre buscando aprender y aplicar las mejores prácticas de desarrollo. También tengo conocimientos en AWS, Azure y Google Cloud Platform. Trilingüe, con fluidez en Portugués, Inglés y Español.",
          projectsPage: {
            title: "Proyectos",
          },
          project1_title: "PC Dev",
          project1_description:
            "Aplicación web de bolsa de trabajo enfocada en trabajos de tecnología para personas con discapacidad. Creada con React, Java Spring Boot y PostgreSQL.",
          project2_title: "Proyecto 2",
          project2_description: "Esta es una descripción del proyecto 2.",
          project3_title: "Proyecto 3",
          project3_description: "Esta es una descripción del proyecto 3.",
          project4_title: "Proyecto 4",
          project4_description: "Esta es una descripción del proyecto 4.",
          viewProject: "Ver Proyecto",
          mainStack: "Mis Tecnologías Principales",
          contactsPage: {
            title: "Contactos",
            github: "Github",
            instagram: "Instagram",
            linkedin: "Linkedin",
            email: "Correo electrónico",
            form: {
              name: "Nombre",
              nameRequired: "El nombre es obligatorio",
              email: "Email",
              emailRequired: "Se requiere un email válido",
              message: "Mensaje",
              messageRequired: "El mensaje es obligatorio",
              submit: "Enviar",
            },
          },
        },
      },
    },
  });

export default i18n;
