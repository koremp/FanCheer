import React from 'react';

import styled from '@emotion/styled';

const Layout = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5em',
});

const GroupKorText = styled.p({
  color: 'white',
  fontSize: '1.5em',
});

const GroupEngText = styled.p({
  color: 'white',
  fontSize: '1.3em',
});

export default function GroupName({ name }) {
  return (
    <Layout>
      <GroupKorText>
        {name.kor}
      </GroupKorText>
      <GroupEngText>
        {name.eng}
      </GroupEngText>
    </Layout>
  );
}
