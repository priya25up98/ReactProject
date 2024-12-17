import React from 'react';
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import logo from "../image/jobicon.jpg";
import styles from '../header/Header.module.css'




function Header() {
    return (
        <div>
            <Navbar className={styles.flx} expand="lg" >
                <Container >
                    <Navbar.Brand href="/">
                        <img src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav >
                            <Nav.Link className={styles.nav} href="/">Home</Nav.Link>
                            <Nav.Link className={styles.nav} href="/about">About</Nav.Link>
                            <Nav.Link className={styles.nav} href="/jobs">Jobs</Nav.Link>
                            <Nav.Link className={styles.nav} href="/upload-jobs">Upload-Jobs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Brand href="/register"><Button>Register</Button></Navbar.Brand>
                    <Navbar.Brand href="/login"><Button>Login</Button></Navbar.Brand>

                    <Navbar.Brand >
                        <select>
                            <option>Employers Login</option>
                        </select>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header
