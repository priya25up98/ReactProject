import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Navbanner() {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#ffc300", height: "30px" }} >
                <Container >

                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>

                </Container>
            </Navbar>
        </div>
    )
}

export default Navbanner;
