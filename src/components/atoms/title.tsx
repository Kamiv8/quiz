import styled, { css } from 'styled-components';

type Props = {
  heading?: boolean
};

const Title = styled.h1<Props>`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.2em;
  text-align: center;
  margin: 0;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    font-size: 30px;
  }
  ${({ heading, theme }) => heading && css`
    color: ${theme.colors.gray};
    font-size: 40px;
  `}
`;

export default Title;
