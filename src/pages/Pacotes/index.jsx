import React, { useContext } from "react"
import { AuthContext } from "../../context/auth";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button } from "react-bootstrap";

const Pacotes = () => {

  return (

    <>

      <Header />

      <main>
        <Container>

          <Row>

            <h1 className="main-titulo">
              Pacotes incriveis te esperam !!
            </h1>
            <h3>
              NACIONAIS
            </h3>

            <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />
            <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />  <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />

          </Row>
          <Row>


            <h3>
              INTERNACIONAIS
            </h3>

            <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />
            <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />  <Cards
              img={"/images/maldives-1993704_1920.jpg"}
              titulo={"Barcelona + Palma de Mallorca"}
              // texto={"Barcelona + Palma de Mallorca"}
              info={"7 diárias"}
              preco={"R$ 2399"}
              quarto={" Quarto"}
              btn={<Button>comprar</Button>}
            />
          </Row>
          <section>
            <h2>Pacotes baratos, reserve a melhor opção para viajar</h2>


            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sint, vitae inventore fugiat, sed pariatur alias, tenetur voluptate tempora consectetur commodi enim? Distinctio veritatis eligendi possimus quam obcaecati minima nemo.
            Placeat, aliquid maiores! A quasi iure ab obcaecati autem quaerat animi, cupiditate dolores iste beatae quas corrupti accusamus, officiis minus qui pariatur mollitia sit provident. Molestias quo libero voluptas repellat!
            Perferendis, atque eaque, alias placeat eveniet fugiat possimus, labore odit impedit quos iste asperiores. Ex minus libero neque odit eum dolore obcaecati maiores, amet adipisci velit molestiae doloremque eligendi voluptatem.
            Dolor debitis beatae minima tempora ea architecto pariatur delectus nihil praesentium sunt id qui cupiditate, ab perferendis atque iusto unde est repellendus, eius odio ut maiores. Repudiandae excepturi asperiores assumenda?


          </section>

        </Container>

      </main>
      <Footer />
    </>

  )

}

export default Pacotes;