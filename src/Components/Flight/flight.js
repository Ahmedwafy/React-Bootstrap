import { Container, Row, Col, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './flight.css'

function BasicExample() {
  return (
    <div className="bg-lightblue flight">
      <Container>
        <h1>
          Flight Options <Badge bg="secondary"> Choose your Ticket </Badge>
        </h1>
        <br/>
        <br/>
        <Row style={{ marginBottom: '2rem' }}> {/* Add margin-bottom to the first Row */}

          <Col md={{span:4}}> 
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
              <Card.Body> 
                <Card.Title>Ticket 1</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span:4}}>
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
              <Card.Body>
                <Card.Title>Ticket 2</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span:4}}>
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
              <Card.Body>
                <Card.Title>Ticket 3</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row> 
        
        <Row>
          <Col md={{span:4}}>
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
              <Card.Body>
                <Card.Title>Ticket 4</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span:4}}>
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
                                            {/*className="bg-lightblue"*/}
              <Card.Body>
                <Card.Title>Ticket 5</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={{span:4}}>
            <Card style={{ width: '18rem' , backgroundColor: '#94c2ff'}}>
              <Card.Body>
                <Card.Title>Ticket 6</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Book</Card.Link>
                <Card.Link href="#">Add to list</Card.Link>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;