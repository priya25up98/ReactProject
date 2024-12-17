import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>

            <Navbar style={{ backgroundColor: "#e6ecec" }}>
                <Container>
                    <Navbar.Brand href="#home">Footer contant</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">user</a>
                        </Navbar.Text>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
            {/* ddk */}
            <Navbar style={{ background: " #3a9ba1", color: "white" }} collapseOnSelect expand="lg" >
                <Container >
                    <Navbar.Brand href="#home">{<CiFacebook />}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">{<FaInstagram />}</Nav.Link>
                            <Nav.Link href="#pricing">{<FaTwitterSquare />}</Nav.Link>
                            <Nav.Link href="#pricing">{<FaSquareWhatsapp />}</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes {<FaSnapchatSquare />}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Footer;
