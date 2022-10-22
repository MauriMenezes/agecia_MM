import "./homeStyle.css"
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button } from "react-bootstrap";
import FormPassagem from "../../components/FormPassagem";
import Oferta from "../../components/Oferta";



const Home = () => {

  return (
    <>
      <Header />

      <main>

        <FormPassagem />
        <hr></hr>

        <Oferta
          img={"/images/mobile-phone-1875813_1920.jpg"} />

        <hr></hr>
        <Container className="mb-3" >
          <Row >
            <Cards
              titulo={"AONDE COMPRAR"}
              texto={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo aperiam assumenda provident enim sit eaque, dolores voluptatem odit debitis officia impedit ipsum excepturi ea porro quas quibusdam modi? Blanditiis, soluta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam alias voluptatum nam illo repellat "}
            />
            <Cards
              titulo={"Documentação necesssária"}
              texto={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo aperiam assumenda provident enim sit eaque, dolores voluptatem odit debitis officia impedit ipsum excepturi ea porro quas quibusdam modi? Blanditiis, soluta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam alias voluptatum nam illo repellat "}
            />
            <Cards
              titulo={"É possível alterar /cancelar?"}
              texto={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo aperiam assumenda provident enim sit eaque, dolores voluptatem odit debitis officia impedit ipsum excepturi ea porro quas quibusdam modi? Blanditiis, soluta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam alias voluptatum nam illo repellat "}

            />
          </Row>
        </Container>
      </main>


      <Footer />
    </>
  )

}
export default Home;