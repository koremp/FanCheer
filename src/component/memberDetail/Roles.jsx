import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1em',
});

const Role = styled.p({

});

export default function Roles({ roles }) {
  return (
    <Container>
      <p>포지션</p>
      {
        roles.map((role) => (
          <Role>
            {role}
          </Role>
        ))
      }
    </Container>
  );
}
