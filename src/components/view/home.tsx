import React from 'react';
import { useAppSelector } from '../../app/hooks';
import HomeTemplate from '../templates/homeTemplate';
import useCardData from '../../hooks/useCardData';

const Home = () => {
  const { language } = useAppSelector((state) => state.language);
  const quizzes = useCardData();
  return (
    <HomeTemplate
      welcome={language.home.welcome}
      heading1={language.home.heading1}
      heading2={language.home.heading2}
      quizzes={quizzes}
      copy={language.words.copyright}
    />
  );
};

export default Home;
