import React, { useEffect, useState } from 'react'
import { FeedMainContainer, NotLoggedContainer, FeedSearchBarContainer, FeedPageControlContainer, StyledNewPostForm, StyledPostButton, FeedPostsContainer, EmphasizedText1, EmphasizedText2, NewPostFooter, StyledCharCount, StyledCharCountOver } from './styles'
import { getPosts, createPost, getPostComments } from '../../components/APIRequests'
import Post from '../../components/Post'
import { useForm } from '../../hooks/useForm'
import Pagination from '@mui/material/Pagination'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


export default function Feed(props) {

    const token = localStorage.getItem('token')

    const [show, setShow] = useState(false)
    const [posts, setPosts] = useState([])
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (token !== null) {
            setShow(true)
            getPosts(setLoading, setPosts)
        } else {
            setShow(false)
        }
    }, [])

    useEffect(() => {
        if (token !== null) {
            updateRender()
        }
    }, [page, postsPerPage])

    const { form, onChange, cleanFields } = useForm({
        title: "",
        body: ""
    })

    const renderedPosts = () => {
        if (posts
            .filter(post => {
                if (post.username.toLowerCase().includes(props.searchFor.toLowerCase()) || post.title.toLowerCase().includes(props.searchFor.toLowerCase()) || post.body.toLowerCase().includes(props.searchFor.toLowerCase())) {
                    return post
                }
            }).length > 0) {
            return (
                posts
                    .filter(post => {
                        if (post.username.toLowerCase().includes(props.searchFor.toLowerCase()) || post.title.toLowerCase().includes(props.searchFor.toLowerCase()) || post.body.toLowerCase().includes(props.searchFor.toLowerCase())) {
                            return post
                        }
                    })
                    .map(post => {
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
            )
        } else {
            return (<div>
                {'Não encontramos nenhum post com este filtro nesta página'}
            </div>
            )
        }
    }

    const handlePostsPerPage = (e) => {
        setPostsPerPage(e.target.value)
    }

    const handlePage = (event, value) => {
        setPage(value)
    }

    const submitPost = (e) => {
        e.preventDefault()
        createPost(form, updateRender)
        cleanFields()
    }

    const updateRender = () => {
        getPosts(setLoading, setPosts, page, postsPerPage)
    }

    const renderPage = () => {
        return (
            <FeedMainContainer>
                <StyledNewPostForm onSubmit={submitPost}>
                    <h3>Novo post</h3>
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
                    <NewPostFooter>
                        {form.body.length < 256 ?
                            <StyledCharCount>Caracteres: {form.body.length}/255</StyledCharCount>
                            :
                            <StyledCharCountOver>Caracteres: {form.body.length}/255</StyledCharCountOver>
                        }
                        <StyledPostButton onClick={submitPost}>postar</StyledPostButton>
                    </NewPostFooter>
                </StyledNewPostForm>

                <FeedPageControlContainer>
                    <Pagination count={20} onChange={handlePage} />
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
                    {loading ? <HourglassTopIcon /> : renderedPosts()}
                </FeedPostsContainer>
            </FeedMainContainer>
        )
    }


    const loginRequest = () => {
        return (
            <FeedMainContainer>
                <NotLoggedContainer>
                    <h3>Legal que você está aqui!</h3>
                    <h4>Mas para poder ver o feed, precisa se <EmphasizedText1>logar</EmphasizedText1> ou se <EmphasizedText2>cadastrar</EmphasizedText2> primeiro</h4>
                </NotLoggedContainer>
            </FeedMainContainer>
        )
    }

    return (
        show ? renderPage() : loginRequest()
    )
}