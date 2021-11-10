import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeBandeiraBranca from '../../img/flag.png'
import iconeBandeiraPreta from '../../img/flagged.png'
import iconeShare from '../../img/share.png'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  img{
    align-self: center;
    max-width: 24px;
    max-height: 24px;

  }
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcado: false,
    compartilhado: false
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })

    if(this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
    else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickMarcar = () => {
    this.setState({
      marcado: !this.state.marcado
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhado: !this.state.compartilhado
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  // aoCompartilhar = () => {
  //   this.setState({
  //     compartilhado: false
  //   })
  // }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhado) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar}/>
    }

    let iconeBandeira

    if(this.state.marcado) {
      iconeBandeira = iconeBandeiraPreta
    } else {
      iconeBandeira = iconeBandeiraBranca
    }

    return (
        <PostContainer>
          <PostHeader>
            <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
            <p>{this.props.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeSemContador
              icone={iconeBandeira}
              onClickIcone={this.onClickMarcar}
            />

            <IconeSemContador
              icone={iconeShare}
              onClickIcone={this.onClickCompartilhar}
            />
          </PostFooter>
          {componenteComentario}
          {componenteCompartilhar}
        </PostContainer>
    )
  }
}

export default Post