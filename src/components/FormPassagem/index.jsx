import "./FormPassagem.css"
import React, { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Container, Button } from "react-bootstrap";

const FormPassagem = () => {


  const { authenticated, login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [origem, setOrigem] = useState("")
  const [destino, setDestino] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (authenticated) {
      console.log("está logado")
    }
    else {

      navigate("/login")
    }
  }



  const changeDestino = (e) => {
    setDestino(e.target.value)
  }


  return (

    <>

      <Container>

        <Form id="formP" onSubmit={handleSubmit} >
          <Row >

            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="voo + hospedagem"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="voo + 2 Hospedagens"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  disabled
                  label="voo + carro"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}


          </Row>



          <Row >
            <Col xs={5} >
              <Form.Select className="mb-1" onChange={(e) => setOrigem(e.target.value)}>
                <option>ORIGEM</option>
                <option value="1">BAHIA</option>
                <option value="2">SÃO PAULO</option>
                <option value="3">RECIFE</option>
              </Form.Select>

              <Form.Select aria-label="Default select example" onChange={(e) => setDestino(e.target.value)}>
                <option>DESTINO</option>
                <option value="1">BAHIA</option>
                <option value="2">SÃO PAULO</option>
                <option value="3">RECIFE</option>
              </Form.Select>

            </Col>

            <Col xs={6}>
              <Form.Group
                className="mb-1">
                <Form.Control
                  placeholder="Date" type="date"
                />
              </Form.Group>

              <Form.Group
              >
                <Form.Control
                  type="date"
                  name="duedate"
                  placeholder="Due date"
                // value={date}
                // onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Button id="btn-form" size="sm" type="submit" >BUSCAR</Button>
          </Row>


        </Form>

      </Container>



    </>
  )

}
export default FormPassagem;