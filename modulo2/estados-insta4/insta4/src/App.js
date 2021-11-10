import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1001/50'}
          fotoPost={'https://picsum.photos/id/101/200/150'}
        />

        <Post
          nomeUsuario={'betinha'}
          fotoUsuario={'https://picsum.photos/id/1002/50'}
          fotoPost={'https://picsum.photos/id/102/200/150'}
        />

        <Post
          nomeUsuario={'carlota'}
          fotoUsuario={'https://picsum.photos/id/1003/50'}
          fotoPost={'https://picsum.photos/id/103/200/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
