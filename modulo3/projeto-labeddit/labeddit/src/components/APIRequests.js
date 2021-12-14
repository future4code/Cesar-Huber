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

export const postPost = (body) => {
    
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
        alert('Postado com sucesso no feed')
    })
    .catch((err) => {
        alert(err.response.data)
    })
}