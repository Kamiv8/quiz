import React from 'react';
import styled from 'styled-components';
import Header from '../molecules/header';
import background from '../../assets/background1.svg';
import hideAnimation from '../../styles/animations/hideAnimation';
import PersonSvg from '../atoms/personSvg';

type Props = {
  welcome: string,
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

const HomeTemplate: React.FC<Props> = ({ welcome }) => (
  <WelcomeSection>
    <Header />
    <ContentWrapper>
      <WelcomeText>{welcome}</WelcomeText>
      <SVG />
    </ContentWrapper>
  </WelcomeSection>
);

export default HomeTemplate;
