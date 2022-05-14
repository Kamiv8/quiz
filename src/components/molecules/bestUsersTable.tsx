import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import TableRow from '../atoms/tableRow';
import { getBestPlayers } from '../../features/ranking/rankingSlice';

const Table = styled.table`
  border: 5px solid ${({ theme }) => theme.colors.main};
  width: 50%;
  max-width: 700px;
  border-collapse: collapse;
`;

const BestUsersTable = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBestPlayers());
  }, [dispatch]);

  const users = useAppSelector((state) => state.ranking.players);
  return (
    <Table>
      <tbody>
        {users.slice(-9).map(({ username, quizName, time }, i) => (
          <TableRow
            key={Math.random()}
            username={username}
            quizName={quizName}
            time={time}
            index={i + 2}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default BestUsersTable;
