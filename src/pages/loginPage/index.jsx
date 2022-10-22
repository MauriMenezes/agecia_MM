import React, { useState, useContext } from "react"
import { AuthContext } from "../../context/auth"
import { Link } from "react-router-dom"
import { Button, Alert } from "react-bootstrap"

import "./login.css"


const Login = () => {

  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")




  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("DADOS DO FORM", { email, senha })
    login(email, senha)
  }
  return (

    <div id="login">
      <h1 className="titulo">LOGIN DO SISTEMA</h1>
      <p>{String(authenticated)}</p>
      <form className="form" onSubmit={handleSubmit}>

        <div className="field">
          <label>Email</label>

          <input type={"email"}
            name="password"
            id="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)} required></input>
        </div>
        <div className="field">
          <label>Senha</label>
          <input type={"password"}
            name="password"
            id="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}></input>
        </div>
        <div className="actions">
          <div className="d-grid gap-2">
            <Button type='submit' className="btn-login" variant="primary" size="lg">
              Entrar
            </Button>

          </div>


        </div>
        <div className="reg">
          <h4>Nâo possui conta? Registre-se <Link className="link" to={"/register"} >
            aqui
          </Link>  </h4>
        </div>
      </form>

    </div>


  )
}
export default Login