import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";



const Foot = () => {
    return (
        <footer className="bg-dark text-light py-4" >
            <Container>
                <Row>

                    <Col>
                        <img src="https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg" />
                        <p>   Connect with us</p>
                        <p>{<FaInstagram />} {<FaFacebook />} {<FaLinkedin />} {<FaSkype />}</p>
                    </Col>
                    <Col md={3}>
                        <h5>About Us</h5>
                        <p>Providing quality services for job seekers and employers.</p>
                    </Col>
                    <Col md={3}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light">Home</a></li>
                            <li><a href="#jobs" className="text-light">Jobs</a></li>
                            <li><a href="#contact" className="text-light">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <p>Email: support@jobportal.com</p>
                        <p>Phone: +123 456 7890</p>
                    </Col>

                </Row>
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
                </div>
            </Container>
            <p>© 2024 Indeed-Accessibility at Indeed-Privacy Centre and Ad Choices</p>
        </footer>
    );
};

export default Foot;
