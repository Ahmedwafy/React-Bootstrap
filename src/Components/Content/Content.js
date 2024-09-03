import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import image1 from '../../images/c.jpg';
import image2 from '../../images/a.jpg';
import image3 from '../../images/n.jpg';


import './Content.css'


function AutoLayoutExample() {

  return (

    <Container fluid>
        
        <Row className="d-grid gap-2 mt-2">
            <Button variant="primary" size="lg">
                Take a Toure
            </Button>
            <Button variant="primary" size="lg">
                Need Help
            </Button>
            <Button variant="danger" size="lg">
                Report an issue
            </Button>
        </Row>
        <br/>
        <div className='Card'>
            <Card style={{ width: '25rem', fontSize: '50px'}}>
                <Card.Header>+10 Years</Card.Header>
            </Card>
            <Card style={{ width: '25rem', fontSize: '50px'}}>
                <Card.Header>+1000 Clients</Card.Header>
            </Card>
            <Card style={{ width: '25rem', fontSize: '50px'}}>
                <Card.Header>+80 Employees</Card.Header>
            </Card>
        </div>

       <Container>
       <Row>
            <h1 className='title'>Join us now with 30% OFF </h1>

   

            <Col sm={6} md={4}>
                <Image src={image1} rounded />
            </Col>

            <Col sm={6} md={4}>
                <Image src={image3} rounded />
            </Col>

            <Col sm={6} md={4}>
                <Image src={image2} rounded />
            </Col> 

        </Row>
        </Container>
    </Container>



  );
}

export default AutoLayoutExample;



