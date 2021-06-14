import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AboutContainer from '../AboutContainer';

import about from '../../../fixtures/about';
import members from '../../../fixtures/members';

jest.mock('../../assets/images');

test('AboutContainer', () => {
  const handleClick = jest.fn();

  const { getByAltText } = render((
    <AboutContainer
      about={about}
      members={members}
      handleClick={handleClick}
    />
  ));
});
