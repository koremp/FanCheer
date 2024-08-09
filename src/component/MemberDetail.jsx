import React from 'react';

import styled from '@emotion/styled';

import Name from './memberDetail/Name';
import Roles from './memberDetail/Roles';

import { membersImages } from '../assets/images';
import Birthday from './memberDetail/Birthday';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ProfileImage = styled.img({
  display: 'block',
  height: '80%',
  width: '80%',
  margin: '1em',
  border: 0,
  boxShadow: '0 5px 5px -5px rgba(0,0,0,.5)',
});

const TextContainer = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    borderRadius: '5px',
  }, (props) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),
);

const DescText = styled.p({

});

export default function MemberDetail({ member }) {
  const {
    korName,
    engName,
    birthday,
    roles,
    description,
    backgroundColor,
    color,
  } = member

  return (
    <Container>
      <ProfileImage
        src={membersImages[engName.toLowerCase()]}
        alt={korName}
      />
      <TextContainer
        backgroundColor={backgroundColor}
        color={color}
      >
        <Name korName={korName} engName={engName} />
        <Birthday birthday={birthday} />
        <Roles roles={roles} />
      </TextContainer>
      <DescText>{description}</DescText>
    </Container>
  );
}
