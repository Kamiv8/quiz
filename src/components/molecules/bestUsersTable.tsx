import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/hooks';
import TableRow from '../atoms/tableRow';

const Table = styled.table`
  border: 5px solid ${({ theme }) => theme.colors.main};
  width: 50%;
  max-width: 700px;
  border-collapse: collapse;
`;

const BestUsersTable = () => {
  const { language } = useAppSelector((state) => state.language);
  // eslint-disable-next-line no-console
  console.log(language);
  return (
    <Table>
      <tbody>
        <TableRow index={1} username="ds" quizName="fsd" time="fds" />
        <TableRow index={2} username="ds" quizName="fsd" time="fds" />
        <TableRow index={3} username="ds" quizName="fsd" time="fds" />
        <TableRow index={4} username="ds" quizName="fsd" time="fds" />
      </tbody>
    </Table>
  );
};

export default BestUsersTable;
