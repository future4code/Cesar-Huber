import axios from 'axios'
import { BASE_URL, aluno } from '../../constants/api_info'

export const getTrips = () => {
    axios.get(`${BASE_URL}${aluno}/trips`, {
        headers: {
            auth:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
        }

    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const getTripDetail = (id) => {
    axios.get(`${BASE_URL}${aluno}/trip/${id}`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}

export const postCreateTrip = (body) => {
    axios.get(`${BASE_URL}${aluno}/trips`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.response.data)
        })
}