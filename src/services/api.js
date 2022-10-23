import axios from "axios"

export const api = axios.create({

  baseURL: "https://agencia-viagem-recode.herokuapp.com",
})
export const createAuth = async (email, senha) => {

  return api.post("/auth", { email, senha })
}

