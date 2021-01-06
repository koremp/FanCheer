import React from 'react';

import { zeroPad } from '../../utils';

export default function Timer({ date }) {
  return (
    <p>
      컴백까지
      {' '}
      {date.getDate() - 1}
      d
      {' '}
      {zeroPad(date.getHours() + 1, 10)}
      h
      {zeroPad(date.getMinutes(), 10)}
      m
      {zeroPad(date.getSeconds(), 10)}
      s
    </p>
  );
}
