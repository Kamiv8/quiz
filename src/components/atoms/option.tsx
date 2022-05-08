import React from 'react';
import styled from 'styled-components';

type Props = {
  variant: 'A' | 'B' | 'C' | 'D',
  answer: string,
  tickFn: Function,
  active: boolean,
};

const Wrapper = styled.div<Pick<Props, 'active'>>`
  background-color: ${({ theme, active }) => (!active ? theme.colors.blue : theme.colors.second)};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  height: 50px;
  font-weight: 900;
`;

const Variant = styled.span`
  font-size: 1.5em;
  border-right: 2px solid ${({ theme }) => theme.colors.white};
`;

const Option: React.FC<Props> = ({
  variant, answer, tickFn, active,
}) => (
  <Wrapper active={active} onClick={() => tickFn(answer)}>
    <Variant>{variant}</Variant>
    <span>{answer}</span>
  </Wrapper>
);
export default Option;
