import React, { useContext } from "react"
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button } from "react-bootstrap";
import Oferta from "../../components/Oferta";

const Destino = () => {

  return (

    <>

      <Header />
      <main>

        <Container>

          <Row>

            <h3>TOP #3 destinos Nacionais</h3>
            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />
            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />

            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />
          </Row>
          <Row>

            <h3>TOP #3 destinos Internacionais</h3>
            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />
            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />

            <Cards
              img={"/images/rio-de-janeiro-1963744_1920.jpg"}
              titulo={"Rio de janeiro"}
              texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto possimus"}
            />
          </Row>
        </Container>
        <hr></hr>
        <Oferta
          img={"images/photographer-407068_1920.jpg"} />
      </main>
      <Footer />
    </>

  )

}

export default Destino;