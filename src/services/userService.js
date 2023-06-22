import React from "react"

import axios from "../axios"
const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUser = (idUser) => {
    return axios.get(`/api/get-all-user?id=${idUser}`)
}
const createNewUser = (data) => {
    console.log(data)
    return axios.post('/api/create-new-user', data)
}
const deleteUser = (idUser) => {
    return axios.delete('/api/delete-user', { data: { id: idUser } })
}



export { handleLoginApi, getAllUser, createNewUser, deleteUser }