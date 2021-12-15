import React, { useEffect, useState } from 'react'
import { FeedMainContainer, FeedPageControlContainer, StyledNewPostForm, StyledPostButton, FeedPostsContainer } from './styles'
import { getPosts, createPost, getPostComments } from '../../components/APIRequests'
import Post from '../../components/Post'
import { useForm } from '../../hooks/useForm'
import Pagination from '@mui/material/Pagination'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

    useEffect(() => {
        updateRender()
    }, [page, postsPerPage])

    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const renderedPosts = () => posts.map(post => {
        return (
            <Post
                key={post.id}
                post={post}
                getPostComments={getPostComments}
                updateRender={updateRender}
                page={page}
                postsPerPage={postsPerPage}
            />
        )
    })

    const handlePostsPerPage = (e) => {
        setPostsPerPage(e.target.value)
    }

    const handlePage = (event, value) => {
        console.log(value)
        setPage(value)
    }

    const submitPost = (e) => {
        e.preventDefault()
        createPost(form, updateRender)
        cleanFields()
    }

    const updateRender = () => {
        getPosts(setPosts, page, postsPerPage)
    }

    return (
        <FeedMainContainer>
            <StyledNewPostForm onSubmit={submitPost}>
                <input
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    placeholder={'título'}
                    required
                />
                <textarea
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    placeholder={'conteúdo'}
                    required
                />
                <StyledPostButton onClick={submitPost}>postar</StyledPostButton>
            </StyledNewPostForm>

            <FeedPageControlContainer>
                <Pagination count={10} onChange={handlePage} />
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">#Posts</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={postsPerPage}
                        onChange={handlePostsPerPage}
                        autoWidth
                        label="#Posts"
                        sx={{ height: 40 }}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </FeedPageControlContainer>
            <FeedPostsContainer>
                {show ? renderedPosts() : 'Precisa estar logado para visualizar o feed'}
            </FeedPostsContainer>
        </FeedMainContainer>
    )
}