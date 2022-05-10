import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  *,::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  
  body {
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors?.second};
      border-radius: 10px;
      &:hover {
        background: ${theme.colors?.blue};
      }
    }
  }
`;
