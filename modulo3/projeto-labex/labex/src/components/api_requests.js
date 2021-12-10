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

export const getTripDetail = (id, setTripDetails) => {
    const token = localStorage.getItem('token')

    axios.get(`${BASE_URL}${ALUNO}/trip/${id}`, {
        headers: {
            auth: token
        }
    })
        .then((res) => {
            setTripDetails(res.data.trip)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const postCreateTrip = (body) => {
    const token = localStorage.getItem('token')

    axios.post(`${BASE_URL}${ALUNO}/trips`, body, {
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

export const postApplication = (tripId, body) => {

    axios.post(`${BASE_URL}${ALUNO}/trips/${tripId}/apply`, body)
    .then((res) => {
        console.log(res )
    })
    .catch((err) => {
        console.log(err)
    })
}

export const deleteTrip = (id) => {
    const token = localStorage.getItem('token')

    axios.delete(`${BASE_URL}${ALUNO}/trips/${id}`, {
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

export const decideCandidate = (tripId, candidateId, decision, getTripDetail, setTripDetails) => {
    const token = localStorage.getItem('token')
    const body = {
        approve: decision
    }
    console.log('infos recebidas | tripId: ', tripId, ' candidateId: ', candidateId, ' decision: ', decision)

    axios.put(`${BASE_URL}${ALUNO}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: token
        }
    })
    .then((res) => {
        getTripDetail(tripId, setTripDetails)
        let msg = decision ? 'aprovado' : 'rejeitado'
        alert(`Candidato ${msg} com sucesso!`)
    })
    .catch((err) => {
        alert(err.response.data)
    })
}