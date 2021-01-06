import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1em',
});

const KorName = styled.p({
  fontSize: '2em',
});

const EngName = styled.p({
  fontSize: '1.5em',
});

export default function Name({ korName, engName }) {
  return (
    <Container>
      <KorName>
        {korName}
      </KorName>
      <EngName>
        {engName}
      </EngName>
    </Container>
  );
}
