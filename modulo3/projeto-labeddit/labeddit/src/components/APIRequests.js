import axios from "axios"
import { BASE_URL } from "../constants/apiConnections"

export const signUp = (body, goToFeed) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        alert('Usuário cadastrado com sucesso')
        goToFeed()
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const login = (body, goToFeed) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToFeed()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const getPosts = (setLoading, setPosts, page, postsPerPage, userVote) => {
    
    const token = localStorage.getItem('token')
    setLoading(true)

    axios.get(`${BASE_URL}/posts?page=${page}&size=${postsPerPage}&uservote=${userVote}`, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        setPosts(res.data)
        setLoading(false)
    })
    .catch((err) => {
        alert(err.response.data)
        setLoading(false)
    })
}

export const createPost = (body, updateRender) => {
    
    const token = localStorage.getItem('token')
    const caracteres = body.body.length

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        alert('Postado com sucesso no feed')
        updateRender()
    })
    .catch((err) => {
        if (err.response.status == 500) {
            alert(`Seu post tem ${caracteres} caracteres. Reduza para o máximo de 255 caracteres.`)
        } else {
            alert(err.response.data)
        }
        
    })
}

export const getPostComments = (setPostComments, id) => {

    const token = localStorage.getItem('token')

    axios.get(`${BASE_URL}/posts/${id}/comments`, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        setPostComments(res.data)
    })
    .catch((err) => {
        alert(err.response)
    })
}

export const createComment = (id, body, updateRender) => {

    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const createPostVote = (id, body, updateRender) => {

    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const changePostVote = (id, body, updateRender) => {

    const token = localStorage.getItem('token')

    axios.put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const deletePostVote = (id, updateRender) => {

    const token = localStorage.getItem('token')

    axios.delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const createCommentVote = (id, body, updateRender) => {

    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const changeCommentVote = (id, body, updateRender) => {

    const token = localStorage.getItem('token')

    axios.put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const deleteCommentVote = (id, updateRender) => {

    const token = localStorage.getItem('token')

    axios.delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        updateRender()
    })
    .catch((err) => {
        alert(err.response.data)
    })
}