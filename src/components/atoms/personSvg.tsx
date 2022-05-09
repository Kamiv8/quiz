import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ReactComponent as Scene } from '../../assets/person.svg';

const Wrapper = styled.div`
  align-items: end;
  justify-content: end;
  width: 100%;
  display: none;
  @media ${({ theme }) => theme.device.laptopL} {
    display: flex;
  }
`;

const PersonSvg = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    // @ts-ignore
    const [elements] = wrapper.current.children;
    const background = elements.getElementById('background');
    const character = elements.getElementById('character');
    const html = elements.getElementById('html');
    const css = elements.getElementById('css');

    gsap.set([background, character, html, css], { autoAlpha: 0 });
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.fromTo(background, { x: '+=300' }, { duration: 1, x: '0', autoAlpha: 1 })
      .fromTo(character, { x: '+=300' }, { x: '0', autoAlpha: 1, duration: 0.8 })
      .to([html, css], { duration: 0.9, autoAlpha: 1, stagger: 0.3 });
  });
  return (
    <Wrapper ref={wrapper}>
      <Scene />
    </Wrapper>
  );
};

export default PersonSvg;
