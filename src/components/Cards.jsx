import React from "react";
import img1 from '../img/dreamstimefree_114193010.jpg'
import img2 from '../img/dreamstimefree_114228721.jpg'
import img3 from '../img/dreamstimefree_117303636.jpg'
import { Button, Card, Col, Container, Row } from "react-bootstrap"

const Cards = () => {
  return (
    <Container fluid  style={{background: "#5c646e"}}>
        <Row>
          <Col >
            <Card className="my-2">
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{textAlign: 'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" style={{lineHeight: "100%"}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-2">
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{textAlign: 'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" style={{lineHeight: "100%"}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="my-2">
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{textAlign: 'justify'}}>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" style={{lineHeight: "100%"}}>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default Cards