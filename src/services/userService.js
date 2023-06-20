import React from "react"

import axios from "../axios"
const handleLoginApi = (userEmail, userPassword) => {

    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUser = (idUser) => {
    return axios.get(`/api/get-all-user?id=${idUser}`)
}



export { handleLoginApi, getAllUser }