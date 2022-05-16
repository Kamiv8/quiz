import React from 'react';
import Paragraph from './paragraph';

type Props = {
  seconds: number,
  minutes: number,
};

const Time: React.FC<Props> = ({ seconds, minutes }) => (
  <Paragraph>
    {minutes}
    :
    {seconds}
  </Paragraph>
);
export default Time;
