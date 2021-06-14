import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import HomeContainer from '../HomeContainer';

jest.mock('../../assets/images');

test('HomeContainer', () => {
  const handleClickLink = jest.fn();

  const { getByAltText } = render((
    <HomeContainer
      handleClickLink={handleClickLink}
    />
  ));
});
