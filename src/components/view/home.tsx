import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import HomeTemplate from '../templates/homeTemplate';
import useCardData from '../../hooks/useCardData';

const Home = () => {
  const { library } = useAppSelector((state) => state.language);
  const quizzes = useCardData();
  const navigate = useNavigate();

  const navigateToStartQuiz = (type: string) => {
    if (type !== undefined) {
      navigate(type);
    } else {
      navigate('/');
    }
  };

  return (
    <HomeTemplate
      welcome={library.home.welcome}
      heading1={library.home.heading1}
      heading2={library.home.heading2}
      quizzes={quizzes}
      copy={library.words.copyright}
      selectQuiz={navigateToStartQuiz}
    />
  );
};

export default Home;
