import React from 'react';

import styled from '@emotion/styled';

import Name from './memberDetail/Name';
import Roles from './memberDetail/Roles';

import { membersImages } from '../assets/images';
import Birthday from './memberDetail/Birthday';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ProfileContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
});

const ProfileImage = styled.img({
  display: 'block',
  height: '15em',
  width: '15em',
  margin: '1em',
  border: 0,
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
});

const TextContainer = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: '1em',
    padding: '1em',
  }, (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
);

const DescText = styled.p({

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
      <ProfileContainer>
        <ProfileImage
          src={membersImages[id]}
          alt={korName}
        />
        <TextContainer backgroundColor={backgroundColor} color={color}>
          <Name korName={korName} engName={engName} />
          <Birthday birthday={birthday} />
          <Roles roles={roles} />
        </TextContainer>
      </ProfileContainer>
      <DescText>{description}</DescText>
    </Container>
  );
}
