import "./registerStyle.css"
import { json, useNavigate } from "react-router-dom";
import React, { useState } from "react"
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { Button } from "react-bootstrap";
const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")


  const user = {
    id: 0,
    nome: nome,
    senha: senha,
    cpf: cpf,
    email: email
  }
  const submit = async (e) => {
    e.preventDefault()
    try {
      const config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      }
      const response = await fetch("https://agencia-viagem-recode.herokuapp.com/cadastrar", config)
      //const json = await response.json()
      if (response.ok) {
        console.log("deu certo")
        navigate("/login")
        return response
      } else {
        alert("email já cadastrado !")
      }
    } catch (error) {

      console.log(error)
    }
  }

  return (

    <>
      <div id="reg">
        <form className="form" onSubmit={submit}>
          <h2 className="titulo-login">Cadastrar</h2>

          <div className="field">
            <label>Email</label>
            <input type={"email"}
              name="email"
              id="email"
              placeholder="Email@email.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label>Nome</label>
            <input type={"text"}
              name="name"
              id="name"
              placeholder="Seu Nome aqui"

              onChange={(e) => setNome(e.target.value)}
            ></input>
          </div>

          <div className="field">
            <label>CPF</label>
            <input type={"number"}
              name="cpf"
              id="cpf"
              placeholder="XXX.XXX.XXX-XX"

              onChange={(e) => setCpf(e.target.value)}
            ></input>
          </div>
          <div className="field">
            <label>Senha</label>
            <input type={"password"}
              name="password"
              id="password"
              placeholder="*********"

              onChange={(e) => setSenha(e.target.value)}
            ></input>
          </div>
          <div className="actions">
            <Button type="submit" className="btn-register">CADASTRAR</Button>
          </div>
          <div className="reg">
            <h4>Já possui conta? Entre  <Link className="link" to={"/login"} >
              aqui
            </Link>  </h4>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )

}
export default Register;