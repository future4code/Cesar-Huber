import React, { useEffect, useState } from 'react'
import { FeedMainContainer } from './styles'
import { getPosts, postPost } from '../../components/APIRequests'
import Post from '../../components/Post'
import { useForm } from '../../hooks/useForm'

export default function Feed() {

    const token = localStorage.getItem('token')

    const [posts, setPosts] = useState([])
    const [show, setShow] = useState(false)
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (token !== null) {
            setShow(true)
            getPosts(setPosts)
        } else {
            setShow(false)
        }
    }, [])

    const renderedPosts = posts.map(post => {
        return (
            <Post 
                key={post.id}
                post={post}
            />
        )
    })

    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const handlePostsPerPage = (e) => {
        setPostsPerPage(e.target.value)
        getPosts(setPosts, page, postsPerPage)
    }

    const handlePage = (e) => {
        setPage(e.target.value)
        getPosts(setPosts, page, postsPerPage)
    }

    const submit = (e) => {
        e.preventDefault()
        postPost(form)
        cleanFields()
    }

    return (
        <FeedMainContainer>
            <select onChange={handlePage}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <select onChange={handlePostsPerPage}>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <form onSubmit={submit}>
                <input 
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    placeholder={'título'} 
                    required
                />
                <input 
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    placeholder={'conteúdo'} 
                    required
                />
                <button>Postar</button>
            </form>
            
            {show ? renderedPosts : 'Precisa estar logado para visualizar o feed'}
        </FeedMainContainer>
    )
}