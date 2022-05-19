import React from 'react';
import styled, { css } from 'styled-components';
import Button from './button';
import transformShadowAnimation from '../../styles/animations/transformShadowAnimation';

type Props = {
  type: string,
  name: string,
  startFn: Function,
  image: string,
};

type WrapperProps = {
  type: string,
};

const Image = styled.div<{ image: string }>`
  width: 150px;
  height: 150px;
  display: flex;
  background-position: center;
  background-image: ${({ image }) => `url('${image}')`};
  background-repeat: no-repeat;
`;

const Wrapper = styled.div.attrs((props: WrapperProps) => ({
  type: props.type,
}))`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 25px 25px 0 ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  padding: 20px 0;
  &:hover {
    
   animation: ${transformShadowAnimation} .2s  ease-in-out forwards;
  }
  ${({ type, theme }) => {
    switch (type) {
      case 'css':
        return css`
          background: ${theme.gradients.css};
        `;
      case 'html':
        return css`
          background: ${theme.gradients.html};
        `;
      case 'js':
        return css`
          background: ${theme.gradients.js};
        `;
      case 'react':
        return css`
          background: ${theme.gradients.react};
        `;
      default:
        return css`
          background: ${theme.gradients.angular};
        `;
    }
  }}
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

const Card: React.FC<Props> = ({
  type, startFn, name, image,
}) => (
  <Wrapper type={type}>
    <Image image={image} />
    <Name>{name}</Name>
    <Button type="button" onClick={() => startFn(type)}>start</Button>
  </Wrapper>

);
export default Card;
