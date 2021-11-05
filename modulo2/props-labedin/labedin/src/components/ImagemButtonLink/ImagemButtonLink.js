import React from 'react'
import { ImageButtonContainerLink } from "../styled/styled"

function ImagemButtonLink(props) {
    return (
        // <Link to { props.link }>
            <ImageButtonContainerLink>
                <img src={ props.imagem }/>
                <p>{ props.texto }</p>
            </ImageButtonContainerLink>
        // </Link>
    )
}

export default ImagemButtonLink;