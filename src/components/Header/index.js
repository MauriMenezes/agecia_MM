import "./header.css"
import { RiLoginCircleLine, RiLogoutCircleFill } from 'react-icons/ri';
import { FaRegIdCard, FaPlane, FaFireAlt } from 'react-icons/fa';
import { TbTicket, TbPaperBag, TbPhonePlus } from 'react-icons/tb';



import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { AuthContext } from "../../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

  const { authenticated, logout } = useContext(AuthContext)

  const handleLogout = () => {

    logout()
  }


  return (
    <div>

      {/* <Button variant='success' >test Button</Button> */}
      <header>
        <Container fluid>

          <Row>
            <Col>
              <img src="/images/M.png" width="80px" ></img>
            </Col>
            <Col >
              <Nav className="justify-content-end" activeKey="/home">
                {authenticated
                  ?
                  <Button onClick={handleLogout}>LogOut</Button>
                  :
                  <>

                    <Nav.Item>
                      <Link className="link" to={"/login"} >
                        <RiLoginCircleLine />
                        Entrar
                      </Link>

                    </Nav.Item>
                    <Nav.Item>
                      <Link className="link" to={"/register"} >
                        <FaRegIdCard />
                        Cadastrar
                      </Link>
                    </Nav.Item>
                  </>
                }

              </Nav>
            </Col>
          </Row>
        </Container>
        {/* NAVBAR */}
        <Navbar >
          <Container fluid>

            <Nav.Item className="box-link">
              <Nav.Link as={Link} to="/">
                <div className="icon">
                  <TbTicket />
                </div>
                Passagem
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="box-link">
              <Nav.Link as={Link} to="/destino">
                <div className="icon">
                  <FaPlane />
                </div>
                destino
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="box-link">
              <Nav.Link as={Link} to="/pacotes">
                <div className="icon">
                  <TbPaperBag />
                </div>
                Pacotes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="box-link">
              <Nav.Link as={Link} to="/ofertas">
                <div className="icon">
                  <FaFireAlt />
                </div>
                Ofertas
              </Nav.Link>
            </Nav.Item>
            <Nav className="me-auto">
              <Nav.Item className="box-link">
                <Nav.Link as={Link} to="/contato">
                  <div className="icon">
                    <TbPhonePlus />
                  </div>
                  Contato
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>

      </header>


    </div>
  )
}
export default Header