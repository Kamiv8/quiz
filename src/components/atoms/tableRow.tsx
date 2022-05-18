import React from 'react';
import styled from 'styled-components';
import { TimerType } from '../../features/quiz/timerType';

type Props = {
  username: string,
  quizName: string,
  time: TimerType,
  index: number,
};

const Tr = styled.tr`
  width: 100%;
  border: 1px solid #000;
`;

const Td = styled.td<{ first?: boolean }>`
  border-right: ${({ first }) => first && '1px solid #000'};
  text-align: center;
  font-weight: bold;
  font-size: ${({ first }) => (first ? '2em' : '1em')};
  width: ${({ first }) => (first && '10%')};
  padding: 10px 20px;
`;

const TableRow: React.FC<Props> = ({
  username, quizName, time, index,
}) => (
  <Tr>
    <Td first>{index}</Td>
    <Td>{username}</Td>
    <Td>{quizName}</Td>
    <Td>
      {time.minutes}
      :
      {time.seconds}
    </Td>
  </Tr>
);
export default TableRow;
