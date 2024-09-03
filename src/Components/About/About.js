
import Placeholder from 'react-bootstrap/Placeholder';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import "./About.css"
function About () {
    return (
        <Container fluid className="about-container">
            <div className='about'>
                <Placeholder xs={12} bg="primary" />
                <h3>About US</h3>
                <Placeholder xs={12} bg="primary" />

                {/* <img src="https://placehold.it/286x180" alt="#"></img> */}

                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <br/>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>

            <Row>
                <Col sm={6} md={4}>
                    <Image src="https://placehold.it/286x180" rounded />
                </Col>

                <Col sm={6} md={4}>
                    <Image src="https://placehold.it/286x180" rounded />
                </Col>

                <Col sm={6} md={4}>
                    <Image src="https://placehold.it/286x180"rounded />
                </Col> 

            </Row>

        </Container>
    )
}

export default About