import "./oferta.css"
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Button } from "react-bootstrap";
import FormPassagem from "../../components/FormPassagem";
import { Link } from "react-router-dom";

const Oferta = ({ img }) => {

  return (

    <Container className="oferta">
      <Row>

        <Col>
          <h2>
            Encontre Pacotes de viagens
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quam recusandae labore harum tempora voluptate, asperiores aliquid minus natus nobis deserunt. Est doloremque minus nobis blanditiis assumenda iste quasi obcaecati.
            Quasi dolorum architecto iure qui quia quos eveniet excepturi saepe ullam fuga, quaerat autem reiciendis repellendus illum perspiciatis voluptas ea perferendis velit, dolor exercitationem sit! Similique modi nesciunt libero maiores.
          </p>
          <p>
            Labore accusantium dolorem cupiditate laborum, adipisci a ipsum minima blanditiis! Animi, necessitatibus. Adipisci culpa suscipit temporibus id sapiente possimus similique architecto aliquid expedita harum, sit perspiciatis alias eius maxime vel.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, omnis libero. Hic sed temporibus tempora repellat, necessitatibus recusandae atque facere provident, libero, aperiam quasi dolorum ad modi fugit odio! Est?
          </p>
        </Col>
        <Col md={6}>
          <img src={img} className="img-oferta" width="100%"></img>
          <div>
            <p>
              Se você ainda não definiu o seu destino, talvez te interesse ver a nossa seção de ofertas.
            </p>
            <Link as={Link} to="/ofertas"><Button className="mt-0 btn-oferta" >OFERTAS</Button></Link>




          </div>
        </Col>
      </Row>
    </Container >

  )

}
export default Oferta;