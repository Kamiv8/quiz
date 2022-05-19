import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import congratulation from '../../assets/congratulation.svg';
import correctSVG from '../../assets/correct.svg';
import wrongSVG from '../../assets/wrong.svg';
import alarmSVG from '../../assets/alarmx.svg';
import Button from '../atoms/button';
import { TimerType } from '../../features/quiz/timerType';
import Time from '../atoms/time';
import Title from '../atoms/title';
import Paragraph from '../atoms/paragraph';
import Input from '../atoms/input';
import useSaveResults from '../../hooks/useSaveResults';
import VariantType from '../../features/quiz/variantType';

type Props = {
  time: TimerType,
  tickedAnswers: VariantType[]
};

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    grid-template-columns: repeat(2,1fr);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Congratulation = styled.div`
  background-image: url(${congratulation});
  background-size: contain;
  width: 100%;
  height: 100%;
  display: none;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    display: block;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  
`;

const RowWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: center;

`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FinishQuiz: React.FC<Props> = ({ time, tickedAnswers }) => {
  const { library } = useAppSelector((state) => state.language);
  const {
    backToHome, results, save, setUsername,
  } = useSaveResults(tickedAnswers);
  return (
    <Wrapper>
      <Content>
        <Title>
          {library.words.congratulation}
        </Title>
        <RowWrapper>
          <Icon src={correctSVG} alt="correct icon" />
          <Paragraph>{results?.correct}</Paragraph>
          <Paragraph>{library.words.correct}</Paragraph>
        </RowWrapper>
        <RowWrapper>
          <Icon src={wrongSVG} alt="wrong icon" />
          <Paragraph>{results?.wrong}</Paragraph>
          <Paragraph>{library.words.wrong}</Paragraph>
        </RowWrapper>
        <RowWrapper>
          <Icon src={alarmSVG} alt="alarm icon" />
          <Time seconds={time.seconds} minutes={time.minutes} />
          <Paragraph>{library.words.time}</Paragraph>
        </RowWrapper>
        <Input onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Podaj swój pseudonim" />
        <ButtonsWrapper>
          <Button onClick={() => backToHome()}>{library.words.finish}</Button>
          <Button onClick={() => save(time)}>{library.words.save}</Button>
        </ButtonsWrapper>
      </Content>
      <Congratulation />
    </Wrapper>
  );
};

export default FinishQuiz;
