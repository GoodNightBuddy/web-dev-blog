import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Cards from "../components/Cards"
import Jumbotron from "../components/Jumbotron"
import Slider from "../components/Slider"
import img from "../img/dreamstimefree_114428623.jpg"
import background from "../img/dreamstimefree_113906091.jpg"


const Home = () => {
  return (
    <div >
      <Slider />
      
      <Cards />

      <Jumbotron height={'400px'} background={background}/>

      <Container fluid>
      <Row className="my-3">
        <Col md={7} className="text-center d-flex flex-column justify-content-center align-items-center flex-wrap">
        <img src={img}  className="" alt="Bayraktart" height={400} />
        </Col>
        <Col md={5}>
        <h1 className="display-4">Web developer blog</h1>
        <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero distinctio, iure eos earum unde voluptates odit, itaque deleniti quo non dolorum numquam. Aspernatur atque, mollitia voluptatibus iure dignissimos sit exercitationem! Voluptas magni fugiat rerum ea beatae ex quo minus! Eius quis praesentium obcaecati, blanditiis totam, illo iste optio eum distinctio, alias impedit corporis eveniet ducimus odit? Voluptatem ad asperiores quos.</p>

        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Home