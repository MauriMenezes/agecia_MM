import "./contato.css"
import React, { useContext } from "react"
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button, Form } from "react-bootstrap";

const Contato = () => {

  return (

    <>
      <Header />


      <Container>

        <Row className="justify-content-md-center">
          <Col xs lg="6">

            <div className="caixa-form">
              <Form>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Nome Completo</Form.Label>
                  <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="fone">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="tel" placeholder="(XX)XXXX-XXXX" />
                </Form.Group>
                <Button>ENVIAR</Button>

              </Form>

            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  )

}

export default Contato;