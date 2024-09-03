import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import Placeholder from 'react-bootstrap/Placeholder';

function BasicExample() {
  return (
    <Container>
        <Col>
            <h2>Cards Title / Offers / Discounds / Most Popular</h2>
        </Col>
        <Row>
            <Col xs={{ span: 4  , offset: 0 }}>
                <Card style={{ width: '18rem' }} className='bg-info'>
                    <Card.Img variant="top" src="https://placehold.it/286x180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xs={{ span: 4, offset: 0 }}>
                <Card style={{ width: '18rem' }} className='bg-info'>
                <Card.Img variant="top" src="https://placehold.it/286x180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>

            <Col xs={{ span: 4, offset: 0 }}>
                <Card style={{ width: '18rem' }} className='bg-info'>
                <Card.Img variant="top" src="https://placehold.it/286x180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default BasicExample;