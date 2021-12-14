import React from 'react'
import { PostMainContainer } from './styles'
import Avatar from '@mui/material/Avatar';

export default function Post(props) {
    return (
        <PostMainContainer>
            <Avatar>{props.post.username.charAt(0)}</Avatar>
            <p>{props.post.title}</p>
        </PostMainContainer>
    )
}
