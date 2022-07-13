import axios from "axios"

export const api = axios.create({
    baseURL: "https://do-it-lancao.herokuapp.com/"
})