import React from 'react';

import styled from '@emotion/styled';

import { useNavigate } from 'react-router-dom';

import BackToHomeButton from '../component/BackToHomeButton';
import { FullContainer } from '../styles/page';

const NotFoundContainer = styled.div({
  margin: 'auto',
})

const NotFoundText = styled.h1({
  fontSize: '2em'
})

export default function NotFoundPage() {
  const nav = useNavigate();

  function handleClick(url) {
    nav(url);
  }

  return (
    <FullContainer>
      <NotFoundContainer>
        <NotFoundText>
          404 Not Found
        </NotFoundText>
      </NotFoundContainer>
      <BackToHomeButton
        onClick={handleClick}
      />
    </FullContainer>
  );
}
