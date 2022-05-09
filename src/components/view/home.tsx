import React from 'react';
import { useAppSelector } from '../../app/hooks';

const Home = () => {
  const { language } = useAppSelector((state) => state.language);
  return (
    <div>
      {language.home.welcome}
    </div>
  );
};

export default Home;
