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
    resources: {
      en: {
        translation: {
          home: "Home",
          projects: "Projects",
          contacts: "Contacts",
          aboutMe: "About Me",
          description: "FullStack Developer with experience in Java, C#, Express JS and React. Passionate about creating efficient and scalable solutions, always looking to learn and apply the best development practices. I also have knowledge in AWS, Azure and Google Cloud Platform. Trilingual, fluent in Portuguese, English and Spanish.",
        },
      },
      pt: {
        translation: {
          home: "Início",
          projects: "Projetos",
          contacts: "Contatos",
          aboutMe: "Sobre Mim",
          description: "Desenvolvedor FullStack com experiência em Java, C#, Express JS e React. Apaixonado por criar soluções eficientes e escaláveis, sempre buscando aprender e aplicar as melhores práticas de desenvolvimento. Também possuo conhecimento em AWS, Azure e Google Cloud Platform. Trilíngue, com fluência em Português, Inglês e Espanhol.",
        },
      },
    },
  });

export default i18n;
