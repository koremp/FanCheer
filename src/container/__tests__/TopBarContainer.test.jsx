import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TopBarContainer from '../TopBarContainer';

jest.mock('../../assets/images');

test('TopBarContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <TopBarContainer
      handleClick={handleClick}
    />
  ));

  fireEvent.click(getByAltText('To Homepage'));

  expect(handleClick).toBeCalledWith('/');
});
