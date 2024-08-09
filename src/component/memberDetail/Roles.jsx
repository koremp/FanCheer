import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1em auto',
});

const Role = styled.p({

});

export default function Roles({ roles }) {
  return (
    <Container>
      포지션 : {
        roles.map((role) => (
          <>{role}</>
        ))
      }
    </Container>
  );
}
