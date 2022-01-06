import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/AuthenticationControl'
import { getPosts, getPostComments, createComment, createPostVote, changePostVote, deletePostVote } from '../../components/APIRequests'
import { PostDetailMainContainer, PostDetailHeaderContainer, PostDetailNewCommentContainer, PostDetailBodyContainer, PostMainContainer, PostHeaderContainer, PostUserContainer, PostTitleContainer, PostBodyContainer, PostVoteContainer, PostSecondaryContainer } from './styles'
import { GoBackButton } from '../Login/styles'
import Avatar from '@mui/material/Avatar'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import Comment from '../../components/Comment'
import { COLORS } from '../../constants/styling'
import { useForm } from '../../hooks/useForm'
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

export default function Post() {
    
    useProtectedPage()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const pathParams = useParams()

    const [posts, setPosts] = useState([])
    const [postComments, setPostComments] = useState([])
    const [upVote, setUpVote] = useState(false)
    const [downVote, setDownVote] = useState(false)
    const [loading, setLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        body: ''
    })

    useEffect(() => {
        getPosts(setLoading, setPosts, pathParams.page, pathParams.postsPerPage, pathParams.uservote)
        getPostComments(setPostComments, pathParams.id)
        setInitialVote()
    }, [])

    const setInitialVote = () => {
        if (pathParams.uservote == 1) {
            setUpVote(true)
        } else if (pathParams.uservote == -1) {
            setDownVote(true)
        } 
    }

    const vote = (id, v) => {
        const body = {
            direction: v
        }
        if (v === 1 && !upVote && !downVote) {
            setUpVote(true)
            createPostVote(id, body, updateRender)
        } else if (v === -1 && !upVote && !downVote) {
            setDownVote(true)
            createPostVote(id, body, updateRender)
        } else if (v === 1 && upVote) {
            setUpVote(false)
            deletePostVote(id, updateRender)
        } else if (v === -1 && downVote) {
            setDownVote(false)
            deletePostVote(id, updateRender)
        } else if (v === 1 && downVote) {
            setUpVote(true)
            setDownVote(false)
            changePostVote(id, body, updateRender)
        } else {
            setUpVote(false)
            setDownVote(true)
            changePostVote(id, body, updateRender)
        }
    }

    const submitComment = (e) => {
        e.preventDefault()
        createComment(pathParams.id, form, updateRender)
        cleanFields()
    }

    const newComment = (
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
    )

    const renderPostDetail = (id) => posts.filter(post => {
        if (post.id === id) {
            return post
        }
    }).map(post => {
        return (
            <PostDetailHeaderContainer key={post.id}>
                <PostMainContainer>
                    <PostVoteContainer>
                        {upVote ?
                            <ArrowCircleUpIcon
                                onClick={() => { vote(post.id, 1) }}
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
                                onClick={() => { vote(post.id, 1) }}
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
                        <p>{post.voteSum === null ? 0 : post.voteSum}</p>
                        {downVote ?
                            <ArrowCircleDownIcon
                                onClick={() => { vote(post.id, -1) }}
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
                                onClick={() => { vote(post.id, -1) }}
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
                    </PostVoteContainer>
                    <PostSecondaryContainer>
                        <PostHeaderContainer>
                            <PostUserContainer>
                                <Avatar>{post.username.charAt(0).toUpperCase()}</Avatar>
                                <h4>{post.username}</h4>
                            </PostUserContainer>
                            <PostTitleContainer>
                                <p>{post.title}</p>
                            </PostTitleContainer>
                        </PostHeaderContainer>
                        <PostBodyContainer>
                            <p>{post.body}</p>
                        </PostBodyContainer>
                    </PostSecondaryContainer>
                </PostMainContainer>
            </PostDetailHeaderContainer>
        )
    })

    const renderPostComments = () => postComments.map(comment => {
        return (
            <Comment
                key={comment.id}
                updateRender={updateRender}
                comment={comment}
            />
        )
    })


    const updateRender = () => {
        getPosts(setLoading, setPosts, pathParams.page, pathParams.postsPerPage)
        getPostComments(setPostComments, pathParams.id)
    }

    const renderPage = () => {
        return (
            <PostDetailMainContainer>
                {renderPostDetail(pathParams.id)}
                <PostDetailNewCommentContainer>
                    {newComment}
                </PostDetailNewCommentContainer>
                <GoBackButton onClick={goBack}>Voltar</GoBackButton>
                <PostDetailBodyContainer>
                    {renderPostComments().length > 0 ? renderPostComments() : 'Nenhum comentário'}
                </PostDetailBodyContainer>
            </PostDetailMainContainer>
        )
    }

    const renderLoading = () => {
        return (
            <PostDetailMainContainer>
                <HourglassTopIcon />
            </PostDetailMainContainer>
        )
    }

    return (
        loading ? renderLoading() : renderPage()
    )
}
