import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import BackToHomeButton from '../BackToHomeButton';

jest.mock('../../assets/images');

test('BackToHomeButton', () => {
  const onClick = jest.fn();

  const { getByText } = render((<BackToHomeButton onClick={onClick} />));

  expect(getByText(/Home/)).not.toBeNull();

  fireEvent.click(getByText(/Home/));

  expect(onClick).toBeCalled();
});
