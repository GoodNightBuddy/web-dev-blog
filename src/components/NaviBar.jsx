import { Nav, Navbar, NavbarBrand, Container } from "react-bootstrap";
import React from "react"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import LogInForm from "./LogInForm";
import RegistrationForm from "./RegistrationForm";
import { connect } from "react-redux";
import { logOut } from "../store/actions/auth";
import LogOutForm from "./LogOutForm";

const StyledNav = styled.div`
  .navbar-brand {
   &:hover {
     cursor: pointer;
   }
  }
`

function NaviBar(props) {

  const AuthElem = () => <span style={{ fontSize: "x-small" }} className="position-absolute  translate-middle badge bg-transparent">
    Authorized
  </span>

  return (
    <>
      <StyledNav>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container fluid>
            <NavbarBrand as={Link} to="/">WebDev blog
              { props.isLogIn ? <AuthElem /> : null }

            </NavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="py-0">Home</Nav.Link>
                <Nav.Link as={Link} to="/about" className="py-0">About</Nav.Link>
                <Nav.Link as={Link} to="/users" className="py-0">Users</Nav.Link>
              </Nav>
              <Nav>
                {
                  props.isLogIn ?
                    <>
                      <LogOutForm />
                    </>
                    : <>
                      <LogInForm />
                      <RegistrationForm />
                    </>
                }
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
      </StyledNav>

    </>
  )

}

function mapStateToProps(state) {
  return {
    isLogIn: state.auth.isLogIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NaviBar)