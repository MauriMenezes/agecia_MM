import React, { createContext, useState, useEffect } from "react";

import { json, useNavigate } from "react-router-dom";
import { api, createAuth } from "../services/api";
export const AuthContext = createContext()



export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const recoverUser = localStorage.getItem('user')

    if (recoverUser) {
      setUser(JSON.parse(recoverUser))
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {

    console.log('login', { email, password })

    const response = await createAuth(email, password)
    const token = response.data.token
    console.log(response.data)

    // api

    const loggedUser = {

      id: response.data.idUser,
      email: response.data.emailUser,
      token: token
    }

    localStorage.setItem("user", JSON.stringify(loggedUser))
    api.defaults.headers.Authorization = `Bearer ${token}`
    setUser({ loggedUser })

    navigate("/")


  }

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    api.defaults.headers.Authorization = null
    setUser(null)
    navigate("/login")
  }


  return (

    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }} >
      {children}
    </AuthContext.Provider>

  )

}