import React from 'react';

import styled from '@emotion/styled';

import { membersImages } from '../assets/images';

const Container = styled.div({

});

const Name = styled.div({
  alignContent: 'center',
});

const ProfileImage = styled.img({
  display: 'block',
  height: '15em',
  margin: '1em',
  border: 0,
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
});

const Role = styled.div({

});

const Description = styled.div({

});

export default function MemberDetail({ member }) {
  const {
    id,
    korName,
    engName,
    backgroundColor,
    color,
    roles,
    birthday,
    description,
  } = member;

  return (
    <Container>
      <ProfileImage
        src={membersImages[id]}
        alt=""
      />
      <Name>
        {korName}
        (
        {engName}
        )
      </Name>
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
