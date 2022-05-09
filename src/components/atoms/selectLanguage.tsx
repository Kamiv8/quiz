import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { Language } from '../../features/language/languageLibraryType';
import { changeLanguage } from '../../features/language/languageSlice';

const Select = styled.select`
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  padding: 0 10px;
  background: none;
  color: ${({ theme }) => theme.colors.second};
  border: 3px solid ${({ theme }) => theme.colors.second};
`;

const SelectLanguage = () => {
  const dispatch = useAppDispatch();

  return (
    <Select onChange={(e) => dispatch(changeLanguage(e.target.value as unknown as Language))}>
      <option value={Language.pl}>Polski</option>
      <option value={Language.en}>English</option>
    </Select>
  );
};

export default SelectLanguage;
