import React from 'react';

import styled from '@emotion/styled';

export default function Debut({ debutDate }) {
  const debutDateData = new Date(debutDate);

  const y = debutDateData.getUTCFullYear();
  const m = debutDateData.getMonth() + 1;
  const d = debutDateData.getDate();

  const today = new Date();

  const diffTime = today - debutDateData;

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

  return (
    <div>
      <p>
        {'데뷔: '}
        {y}
        년
        {' '}
        {m}
        월
        {' '}
        {d}
        일
      </p>
      <p>
        데뷔일로부터
        <b>
          {' '}
          +
          {' '}
          {diffDays}
        </b>
        일
      </p>
    </div>
  );
}
