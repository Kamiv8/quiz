import React from 'react';
import styled from 'styled-components';
import Header from '../molecules/header';
import background from '../../assets/background1.svg';
import hideAnimation from '../../styles/animations/hideAnimation';
import PersonSvg from '../atoms/personSvg';
import Card from '../atoms/card';
import Title from '../atoms/title';
import { CardDataType } from '../../hooks/useCardData';
import BestUsersTable from '../molecules/bestUsersTable';
import BestUser from '../atoms/bestUser';
import Footer from '../molecules/footer';

type Props = {
  welcome: string,
  heading1: string,
  heading2: string,
  quizzes: CardDataType[],
  copy: string,
  selectQuiz: Function;
};

const WelcomeSection = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

const WelcomeText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 61px;
  font-weight: 900;
  margin: 15vh auto;
  text-align: center;
  animation: ${hideAnimation} 1.5s ease-in-out;
  @media screen and ${({ theme }) => theme.device.tablet} {
    width: 50%;
    margin: 10vh 10vw;
  }
  @media screen and ${({ theme }) => theme.device.laptopL} {
    width: 30%;
    margin: 15vh 10vw;
  }
`;

const ContentWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: space-between;
`;

const SVG = styled(PersonSvg)`
  align-items: flex-end;
`;

const LayoutTitle = styled(Title)`
    text-align: center;
    margin: 10vh 0;
`;

const QuizSection = styled.section`
  
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 10vw;
  justify-content: center;
  gap: 10vh 15vw;
`;

const RankingSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
`;

const HomeTemplate: React.FC<Props> = ({
  welcome, heading1, heading2, quizzes, copy, selectQuiz,
}) => (
  <>
    <WelcomeSection>
      <Header />
      <ContentWrapper>
        <WelcomeText>{welcome}</WelcomeText>
        <SVG />
      </ContentWrapper>
    </WelcomeSection>
    <QuizSection>
      <LayoutTitle heading>{heading1}</LayoutTitle>
      <CardWrapper>
        {quizzes.map(({ image, type, name }) => (
          <Card
            key={type}
            image={image}
            type={type}
            name={name}
            startFn={selectQuiz}
          />
        ))}
      </CardWrapper>
    </QuizSection>
    <RankingSection>
      <LayoutTitle heading>{heading2}</LayoutTitle>
      <BestUser />
      <BestUsersTable />
    </RankingSection>
    <Footer copy={copy} />
  </>

);

export default HomeTemplate;
