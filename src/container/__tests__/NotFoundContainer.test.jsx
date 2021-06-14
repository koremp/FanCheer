import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NotFoundContainer from '../NotFoundContainer';

jest.mock('../../assets/images');

test('NotFoundContainer', () => {
  const { getByAltText } = render((
    <NotFoundContainer />
  )); 
});
