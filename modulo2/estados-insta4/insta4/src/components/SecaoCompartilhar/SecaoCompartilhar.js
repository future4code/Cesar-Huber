import React, {Component} from 'react'
import styled from 'styled-components'
import instagram from '../../img/instagram.png'
import facebook from '../../img/facebook.png'
import twitter from '../../img/twitter.png'

const ShareContainer = styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around;
    align-items: center; */
    padding: 5px;
    img{
        width: 30px;
        height: 30px;
    }
`

const IconsContainer = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
`

export class SecaoCompartilhar extends Component {

    state = { 
        mensagem: ""
    }

	onChangeCompartilhar = (event) => {
		this.setState({
			mensagem: event.target.value
		})

		console.log( event.target.value )
	}

    onClickCompartilharInstagram = () => {
        console.log(`Post compartilhado no Instagram com a mensagem: '${this.state.mensagem}'`)
    }

    onClickCompartilharFacebook = () => {
        console.log(`Post compartilhado no Facebook com a mensagem: '${this.state.mensagem}'`)
    }

    onClickCompartilharTwitter = () => {
        console.log(`Post compartilhado no Twitter com a mensagem: '${this.state.mensagem}'`)
    }

	render() {
		return <ShareContainer>
            <IconsContainer>
                <img src={instagram} onClick={this.onClickCompartilharInstagram} alt="icone de compartilhamento Instagram" />
                <img src={facebook} onClick={this.onClickCompartilharFacebook} alt="icone de compartilhamento Facebook" />
                <img src={twitter} onClick={this.onClickCompartilharTwitter} alt="icone de compartilhamento Twitter" />
            </IconsContainer>
            <input 
                placeholder="Mensagem compartilhada" 
                value={this.state.mensagem} 
                onChange={this.onChangeCompartilhar}
            />
		</ShareContainer>
	}
}
