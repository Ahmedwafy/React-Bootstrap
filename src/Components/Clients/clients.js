import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Clients () {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />  
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />  
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://placehold.it/286x180" thumbnail />
        </Col>
      </Row>

    </Container>
  );
}

export default Clients;