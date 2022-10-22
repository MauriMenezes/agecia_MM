import axios from "axios"

export const api = axios.create({

  baseURL: "http://localhost:8080",
})
export const createAuth = async (email, senha) => {

  return api.post("/auth", { email, senha })
}