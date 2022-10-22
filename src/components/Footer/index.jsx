import "./footer.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row } from "react-bootstrap";


const Footer = () => {

  return (
    <>
      <Navbar className="p-2 footer"  >
        <Container fluid >
          <Row>
            <img src="/images/GitHub-Mark-Light-32px.png" width="30px" ></img>

          </Row>
        </Container>
      </Navbar>



    </>

  )

}
export default Footer;