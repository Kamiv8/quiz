import React from 'react';
import styled from 'styled-components';
import VariantType from '../../features/quiz/variantType';

type Props = {
  variant: VariantType
  answer: string,
  tickFn: Function,
  selected: VariantType | null
};

const Wrapper = styled.div.attrs((props: { selected: boolean }) => ({ selected: props.selected }))`
  
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  height: 50px;
  font-weight: 900;
  cursor: pointer;
  border: ${({ theme, selected }) => (selected ? `5px solid ${theme.colors.main}` : 'none')}
`;

const Variant = styled.span`
  font-size: 1.5em;
  border-right: 2px solid ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const Answer = styled.span`
  padding-left: 10px;
`;

const Option: React.FC<Props> = ({
  variant, answer, tickFn, selected,
}) => (
  <Wrapper selected={selected === variant} onClick={() => tickFn(variant)}>
    <Variant>{variant}</Variant>
    <Answer>{answer}</Answer>
  </Wrapper>
);
export default Option;
