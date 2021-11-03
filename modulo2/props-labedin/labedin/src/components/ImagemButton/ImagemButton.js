import React from 'react';
// import './ImagemButton.css'
import { ImageButtonContainer } from "../styled/styled"

function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;