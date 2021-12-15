import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPosts, getPostComments } from '../../components/APIRequests'
import { PostDetailMainContainer, PostDetailCommentContainer } from './styles'

export default function Post() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const pathParams = useParams()

    const [posts, setPosts] = useState([])
    const [postComments, setPostComments] = useState([])

    useEffect(() => {
        getPosts(setPosts, pathParams.page, pathParams.postsPerPage)
        getPostComments(setPostComments, pathParams.id)
    }, [])

    const renderPostDetail = (id) => posts.filter(post => {
        if (post.id === id) {
            return post
        }
    }).map(post => {
        return (
            <PostDetailMainContainer key={post.id}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </PostDetailMainContainer>
        )
    })

    const renderPostComments = () => postComments.map(comment => {
        return (
            <PostDetailCommentContainer key={comment.id}>
                <p>{comment.username}
                | {comment.body}</p>
            </PostDetailCommentContainer>
        )
    })

    return (
        <PostDetailMainContainer>
            Detalhes do Post + Comentários
            <button onClick={goBack}>Voltar</button>
            {renderPostDetail(pathParams.id)}
            {renderPostComments()}
        </PostDetailMainContainer>
    )
}
