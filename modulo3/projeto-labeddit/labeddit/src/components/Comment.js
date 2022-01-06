import React, { useEffect, useState } from 'react'
import { createCommentVote, changeCommentVote, deleteCommentVote } from '../components/APIRequests'
import Avatar from '@mui/material/Avatar'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import { COLORS } from '../constants/styling'
import { CommentMainContainer, CommentUserContainer, CommentBodyContainer, CommentVoteContainer } from './styles'

export default function Comment(props) { 

    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)

    useEffect(() => {
        setInitialVote()
    }, [])

    const setInitialVote = () => {
        if (props.comment.userVote === 1) {
            setUpVote(true)
        } else if (props.comment.userVote === -1) {
            setDownVote(true)
        } 
    }

    const commentVote = (id, v) => {
        const body = {
            direction: v
        }
        if (v === 1 && !upVote && !downVote) {
            setUpVote(true)
            createCommentVote(id, body, props.updateRender)
        } else if (v === -1 && !upVote && !downVote) {
            setDownVote(true)
            createCommentVote(id, body, props.updateRender)
        } else if (v === 1 && upVote) {
            setUpVote(false)
            deleteCommentVote(id, props.updateRender)
        } else if (v === -1 && downVote) {
            setDownVote(false)
            deleteCommentVote(id, props.updateRender)
        } else if (v === 1 && downVote) {
            setUpVote(true)
            setDownVote(false)
            changeCommentVote(id, body, props.updateRender)
        } else {
            setUpVote(false)
            setDownVote(true)
            changeCommentVote(id, body, props.updateRender)
        }
    }

    return (
        <CommentMainContainer key={props.comment.id}>
            <CommentUserContainer>
                <Avatar>{props.comment.username.charAt(0).toUpperCase()}</Avatar>
                <b>{props.comment.username}:</b>
            </CommentUserContainer>
            <CommentBodyContainer>
                {props.comment.body}
            </CommentBodyContainer>
            <CommentVoteContainer>
                {upVote ?
                    <ArrowCircleUpIcon
                        onClick={() => { commentVote(props.comment.id, 1) }}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            color: `${COLORS.eRed}`,
                            "&:hover": {
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                        }}
                    />
                    :
                    <ArrowCircleUpIcon
                        onClick={() => { commentVote(props.comment.id, 1) }}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            "&:hover": {
                                color: `${COLORS.eRed}`,
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                        }}
                    />
                }
                {props.comment.voteSum > 0 ? props.comment.voteSum : 0}
                {downVote ?
                    <ArrowCircleDownIcon
                        onClick={() => { commentVote(props.comment.id, -1) }}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            color: `${COLORS.eBlue}`,
                            "&:hover": {
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                        }}
                    />
                    :
                    <ArrowCircleDownIcon
                        onClick={() => { commentVote(props.comment.id, -1) }}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            "&:hover": {
                                color: `${COLORS.eBlue}`,
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                        }}
                    />
                }
            </CommentVoteContainer>
        </CommentMainContainer>
    )

}