import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import congratulation from '../../assets/congratulation.svg';
import correctSVG from '../../assets/correct.svg';
import wrongSVG from '../../assets/wrong.svg';
import alarmSVG from '../../assets/alarmx.svg';
import Button from '../atoms/button';
import { TimerType } from '../../features/game/timerType';
import Time from '../atoms/time';

type Props = {
  correct: number,
  wrong: number,
  time: TimerType,
};

const Wrapper = styled.div`
  display: grid;
  height: 100%;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    grid-template-columns: repeat(2,1fr);
  }
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

const FinishQuiz: React.FC<Props> = ({ correct, wrong, time }) => {
  const { language } = useAppSelector((state) => state.language);

  return (
    <Wrapper>
      <div>
        <p>
          {language.words.congratulation}
        </p>
        <RowWrapper>
          <Icon src={correctSVG} alt="correct icon" />
          <p>{correct}</p>
          <p>{language.words.correct}</p>
        </RowWrapper>
        <RowWrapper>
          <Icon src={wrongSVG} alt="wrong icon" />
          <p>{wrong}</p>
          <p>{language.words.wrong}</p>
        </RowWrapper>
        <RowWrapper>
          <Icon src={alarmSVG} alt="alarm icon" />
          <Time seconds={time.seconds} minutes={time.minutes} />
          <p>{language.words.time}</p>
        </RowWrapper>
        <div>
          <input type="text" placeholder="Podaj swój pseudonim" />
          <Button>{language.words.save}</Button>
          <Button>{language.words.finish}</Button>
        </div>
      </div>
      <Congratulation />
    </Wrapper>
  );
};

export default FinishQuiz;
