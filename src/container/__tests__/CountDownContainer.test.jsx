import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CountDownContainer from '../CountDownContainer';

jest.mock('../../assets/images');

test('CountDownContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <CountDownContainer
      handleClick={handleClick}
    />
  ));
});
