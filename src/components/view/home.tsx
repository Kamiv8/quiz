import React from 'react';
import { useAppSelector } from '../../app/hooks';
import HomeTemplate from '../templates/homeTemplate';

const Home = () => {
  const { language } = useAppSelector((state) => state.language);
  return (
    <HomeTemplate welcome={language.home.welcome} />

  );
};

export default Home;
