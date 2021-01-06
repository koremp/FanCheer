import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1em',
});

export default function Birthday({ birthday }) {
  return (
    <Container>
      <p>
        생일:
        {birthday}
      </p>
    </Container>
  );
}
