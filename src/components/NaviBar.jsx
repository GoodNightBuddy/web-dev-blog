import { Button, Nav, Navbar, NavbarBrand, Container, Modal, Form } from "react-bootstrap";
import React, { useState } from "react"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledNav = styled.div`
  .navbar-brand {
   &:hover {
     cursor: default;
   }
  }
`

export default function NaviBar() {
  const [show, setShow] = useState(false);
  
  const documentWidth = document.documentElement.clientWidth
  const windowWidth = window.innerWidth
  document.body.onclick = () => console.log(`clietn: ${documentWidth}, widow: ${windowWidth}`)

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleClose = () => {

    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }

  return (
    <>
    <StyledNav>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <NavbarBrand>WebDev Blog</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="py-0">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="py-0">About</Nav.Link>
              <Nav.Link as={Link} to="/users" className="py-0">Users</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="m-md-2 my-1" onClick={handleShow}>Log in</Button>
              <Button variant="primary" className="m-md-2 my-1" onClick={handleShow}>Log out</Button>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </StyledNav>
    
    <Container>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="fromBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="fromBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="enter password" />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Remember me"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </>
  )

}

