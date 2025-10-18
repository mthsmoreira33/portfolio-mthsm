import React from 'react';
import profileImage from '../assets/1669859258325.jpeg';
import { useTranslation } from 'react-i18next';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={profileImage}
        alt="Placeholder"
        className="w-35 h-35 mb-4 rounded-full"
      />
      <div className="max-w-2xl p-8 mx-auto rounded-lg shadow-md bg-card text-card-foreground">
        <h1 className="mb-8 text-5xl font-bold text-center">
          {t('aboutMe')}
        </h1>
        <p className="text-3xl text-justify">
          {t('description')}
        </p>
      </div>
    </div>
  );
};

export default Home;
