import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '1em',
});

export default function Birthday({ birthday }) {
  return (
    <Container>
      생일 : {birthday}
    </Container>
  );
}
