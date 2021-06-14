import React from 'react';

import { render } from '@testing-library/react';

import CountDown from '../CountDown';

jest.mock('../../assets/images');

test('CountDown', () => {
  const { getByText } = render((
    <CountDown />
  ));

  expect(getByText('(G)I-DLE 4th Mini Album')).not.toBeNull();
  expect(getByText('[I burn]')).not.toBeNull();
});
