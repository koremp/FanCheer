import styled from '@emotion/styled';

const HomeLayout = styled.div({
  backgroundImage: `linear-gradient(
    60deg,
    #E11900,
    #7E00BF
  )`,
  backgroundAttachment: 'fixed',
});

const FullContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundImage: `linear-gradient(
    60deg,
    #E11900,
    #7E00BF
  )`,
  backgroundAttachment: 'fixed',
  width: '100%',
  height: '100%',
});

const OverContainer = styled.div({
  margin: '0',
  backgroundImage: `linear-gradient(
    60deg,
    #E11900,
    #7E00BF
  )`,
  backgroundAttachment: 'fixed',
});

export {
  HomeLayout,
  FullContainer,
  OverContainer,
};
