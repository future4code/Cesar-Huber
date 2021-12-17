import React, {useState, useEffect } from 'react'
import { PostMainContainer, PostHeaderContainer, PostUserContainer, PostTitleContainer, PostBodyContainer, PostFooterContainer, PostVoteContainer, PostCommentContainer, PostNewCommentContainer } from './styles'
import Avatar from '@mui/material/Avatar';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { COLORS } from '../constants/styling';
import { createComment, createPostVote, changePostVote, deletePostVote } from './APIRequests';
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom'

export default function Post(props) { 

    const navigate = useNavigate()
    
    const [showComment, setShowComment] = useState(false)
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const {form, onChange, cleanFields} = useForm({
        body: ''
    })

    useEffect(() => {
        setInitialVote()
    }, [])

    const toggleShowComment = () => {
        setShowComment(!showComment)
    }

    const submitComment = (e) => {
        e.preventDefault()
        createComment(props.post.id, form, props.updateRender)
        cleanFields()
    }

    const vote = (id, v) => {
        const body = {
            direction: v
        }
        if (v === 1 && !upVote && !downVote) {
            setUpVote(true)
            createPostVote(id, body, props.updateRender)
        } else if (v === -1 && !upVote && !downVote) {
            setDownVote(true)
            createPostVote(id, body, props.updateRender)
        } else if (v === 1 && upVote) {
            setUpVote(false)
            deletePostVote(id, props.updateRender)
        } else if (v === -1 && downVote) {
            setDownVote(false)
            deletePostVote(id, props.updateRender)
        } else if (v === 1 && downVote) {
            setUpVote(true)
            setDownVote(false)
            changePostVote(id, body, props.updateRender)
        } else {
            setUpVote(false)
            setDownVote(true)
            changePostVote(id, body, props.updateRender)
        }
    }

    const setInitialVote = () => {
        if (props.post.userVote === 1) {
            setUpVote(true)
        } else if (props.post.userVote === -1) {
            setDownVote(true)
        } 
    }

    const renderNewComment = () => {
        return showComment ? 
        <PostNewCommentContainer>
            <form onSubmit={submitComment}>
                <input 
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    placeholder={'escreva aqui seu comentário'}
                    required
                />
                <button onClick={submitComment}>enviar</button>
            </form>
        </PostNewCommentContainer>
        :
        ''
    }

    const goToPostDetail = (id) => {
        navigate(`/post/${props.page}/${props.postsPerPage}/${id}/${props.post.userVote}`)
    }

    return (
        <PostMainContainer>
            <PostHeaderContainer onClick={() => {goToPostDetail(props.post.id)}}>
                <PostUserContainer>
                    <Avatar>{props.post.username.charAt(0).toUpperCase()}</Avatar>
                    <h4>{props.post.username}</h4>
                </PostUserContainer>
                <PostTitleContainer>
                    <p>{props.post.title}</p>
                </PostTitleContainer>
            </PostHeaderContainer>
            <PostBodyContainer>
                <p>{props.post.body}</p>
            </PostBodyContainer>
            <PostFooterContainer>
                <PostVoteContainer>
                    {upVote ? 
                        <ArrowCircleUpIcon 
                            onClick={() => {vote(props.post.id, 1)}}
                            sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            color: `${COLORS.ePrimary}`,
                            "&:hover": {
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                            }} 
                        />
                        :
                        <ArrowCircleUpIcon 
                            onClick={() => {vote(props.post.id, 1)}}
                            sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            "&:hover": {
                                color: `${COLORS.ePrimary}`,
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                            }} 
                        />
                    }
                    <p>{props.post.voteSum === null ? 0 : props.post.voteSum}</p>
                    {downVote ? 
                        <ArrowCircleDownIcon 
                            onClick={() => {vote(props.post.id, -1)}}
                            sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            color: `${COLORS.eSecondary}`,
                            "&:hover": {
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                            }} 
                        />
                        :
                        <ArrowCircleDownIcon 
                            onClick={() => {vote(props.post.id, -1)}}
                            sx={{
                            cursor: 'pointer',
                            borderRadius: '5px',
                            "&:hover": {
                                color: `${COLORS.eSecondary}`,
                                bgcolor: 'rgba(224, 226, 219, .6)'
                            }
                            }} 
                        />
                    }
                </PostVoteContainer>
                <PostCommentContainer>
                    <ChatBubbleOutlineIcon 
                        onClick={toggleShowComment}
                        sx={{
                        cursor: 'pointer',
                        borderRadius: '5px',
                        "&:hover": {
                            color: `${COLORS.ePrimary}`,
                            bgcolor: 'rgba(224, 226, 219, .6)'
                        }
                        }} 
                    />
                    <p>{props.post.commentCount === null ? 0 : props.post.commentCount} {props.post.commentCount > 1 ? 'comentários' : 'comentário'}</p>
                </PostCommentContainer>
            </PostFooterContainer>
            {renderNewComment()}
        </PostMainContainer>
    )
}
