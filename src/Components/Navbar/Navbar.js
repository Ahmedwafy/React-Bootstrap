// Container provide a centered and padded container for the navbar content.
import Container from 'react-bootstrap/Container';

// Nav represents the navigation links within the navbar.
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';
// Navbar component that serves as the main structure for the navigation bar.
import Navbar from 'react-bootstrap/Navbar';

// NavDropdown allows you to create dropdown menus within the navigation bar to group related links.
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Logo from '../../images/rgb.png'

import './Navbar.css'

function BasicExampleNavbar() {
  return (
    <Navbar expand="lg" className="bg-#D1E9F6">
        <Container>
            <Navbar.Brand className='Logo' href="/">
                LOGO / Name
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            {/*Navbar.Toggle:This component is used to render the toggle button*/}
            
            {/*use same id in Navbar.Toggle - links toggle button with the collapsible content */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/About">About</NavLink>
                    <NavLink href="/flight">Flight</NavLink>

                    {/* Create DropDwon Menue with NavDropdown Component */}
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav> 
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar.Collapse>

        </Container>
    </Navbar>
  );
}

export default BasicExampleNavbar;