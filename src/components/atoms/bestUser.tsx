import React from 'react';
import styled from 'styled-components';
import CrownSVG from '../../assets/crown.svg';
import { useAppSelector } from '../../app/hooks';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 50vh;
  display: flex;
`;

const FirstShape = styled.span`
  width: 200px;
  height: 200px;
  &::before {
    content: url(${CrownSVG});
    display: inline-block;
    position: relative;
    left: 0;  
    top: 0;
    transform: rotateZ(-45deg);
    z-index: 2;
    @media screen and ${({ theme }) => theme.device.laptopL} {
    left: -30px;
    }
  }
  &::after {
    content: '1';
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.second};
    position: relative;
    z-index: 1;
    padding: 5px 30px;
    top: -25px;
    left: 50px;
    font-size: 80px;
    font-weight: 900;
    @media screen and ${({ theme }) => theme.device.laptopL} {
      padding: 20px 50px;
      left: 20px;
    }
  }
`;

const UserWrapper = styled.div`
  border: 5px solid ${({ theme }) => theme.colors.main};
  border-radius: 10px;
  position: relative;
  top: 100px;
  left: -50px;
  width: 100%;
  height: 200px;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    left: -100px;

  }
`;

const UserContent = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
    flex-direction: column;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.second};
  font-weight: bold;
  font-size: 16px;
  div {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
  @media screen and ${({ theme }) => theme.device.laptopL} {
    font-size: 32px;
    flex-direction: row;

  }
`;

const User = styled.p`
  padding: 10px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.second};
  font-weight: bold;
  @media screen and ${({ theme }) => theme.device.laptopL} {
    font-size: 40px;
  }
`;

const BestUser = () => {
  const { library } = useAppSelector((state) => state.language);
  const [user] = useAppSelector((state) => state.ranking.players);
  return (
    <Wrapper>
      <FirstShape />
      <UserWrapper>
        <User>{user?.username}</User>
        <UserContent>
          <div>
            <p>Quiz:</p>
            <p>{user?.quiz}</p>
          </div>
          <div>
            <p>
              {library.words.time}
              :
            </p>
            <p>
              {user?.time.minutes}
              :
              {user?.time.seconds}
            </p>
          </div>
        </UserContent>
      </UserWrapper>
    </Wrapper>
  );
};

export default BestUser;
