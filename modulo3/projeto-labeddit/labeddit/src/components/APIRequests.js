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

export const getPosts = (setPosts, page, postsPerPage) => {
    
    const token = localStorage.getItem('token')

    axios.get(`${BASE_URL}/posts?page=${page}&size=${postsPerPage}`, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        setPosts(res.data)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}

export const createPost = (body, updateRender) => {
    
    const token = localStorage.getItem('token')

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
        alert(err.response.data)
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