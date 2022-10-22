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



  const handleSubmit = () => {

    if (authenticated) {

      console.log("está logado")
    }
    navigate("/login")

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

              <Form.Select className="mb-1">
                <option>ORIGEM</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Select aria-label="Default select example">
                <option>DESTINO</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

            </Col>

            <Col xs={6}>
              <Form.Group controlId="duedate" className="mb-1">
                <Form.Control
                  placeholder="Date" type="date"
                />
              </Form.Group>

              <Form.Group controlId="duedate">
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