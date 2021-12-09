import axios from 'axios'
import { BASE_URL, ALUNO } from '../constants/api_info'

export const getTrips = (setTrips) => {
        axios.get(`${BASE_URL}${ALUNO}/trips`)
        .then((res) => {
            setTrips(res.data.trips)
        })
        .catch((err) => {
            alert(err.response.data) 
        })
}

export const Login = (email, password, history) => {
    
    const body = {
        email: email,
        password: password
    }

    axios.post(`${BASE_URL}${ALUNO}/login`, body)

        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert('Login efetuado com sucesso')
            history.push('/admin')
        })
        .catch((err) => {
            alert(err.response.data)
        })
}

export const getTripDetail = (id) => {
    const token = localStorage.getItem('token')

    axios.get(`${BASE_URL}${ALUNO}/trip/${id}`, {
        headers: {
            auth: token
        }
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const postCreateTrip = (body) => {
    const token = localStorage.getItem('token')

    axios.get(`${BASE_URL}${ALUNO}/trips`, body, {
        headers: {
            auth: token
        }
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}