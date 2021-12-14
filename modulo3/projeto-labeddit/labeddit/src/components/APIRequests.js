import axios from "axios"
import { BASE_URL } from "../constants/apiConnections"

export const signUp = (body) => {
    axios.post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
        alert('Usuário cadastrado com sucesso')
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}

export const login = (body, goToFeed) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res) => {
        goToFeed()
    })
    .catch((err) => {
        alert(err.response.data.message)
    })
}