import React from 'react';

type Props = {
  seconds: number,
  minutes: number,
};

const Time: React.FC<Props> = ({ seconds, minutes }) => (
  <p>
    {minutes}
    :
    {seconds}
  </p>
);
export default Time;
