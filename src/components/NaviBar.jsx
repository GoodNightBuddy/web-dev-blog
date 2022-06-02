import { Nav, Navbar, NavbarBrand, Container, OverlayTrigger, Tooltip, Button } from "react-bootstrap";
import React from "react"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import LogInForm from "./LogInForm";
import RegistrationForm from "./RegistrationForm";
import { connect } from "react-redux";
import { authSucces, logOut } from "../store/actions/auth";
import LogOutForm from "./LogOutForm";
import { getCookie } from "../library/workWithCookies";

const StyledNav = styled.div`
  .navbar-brand {
   &:hover {
     cursor: pointer;
   }
  }
`

function NaviBar(props) {

  if (getCookie('email') || getCookie('idToken') || getCookie('localId')) {
    props.authSucces({
      email: getCookie('email'),
      idToken: getCookie('idToken'),
      localId: getCookie('localId')
    })
  }


  const AuthElem = () => <span style={{ fontSize: "x-small" }} className="position-absolute top-100 start-50 translate-middle badge bg-transparent">
    {props.email ? props.email : null}
  </span>


  return (
    <>
      <StyledNav>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container fluid>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 100, hide: 100 }}
              overlay={props.isLogIn ? <></> : <Tooltip id="button-tooltip">Not authorized</Tooltip>}
            >
              <NavbarBrand as={Link} to="/" className="position-relative">
                WebDev blog
                {props.isLogIn ? <AuthElem /> : null}
              </NavbarBrand>
            </OverlayTrigger>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 100 }}
                  overlay={<Tooltip id="button-tooltip">Go home</Tooltip>}
                >
                  <Nav.Link as={Link} to="/" className="py-0">Home</Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 100 }}
                  overlay={<Tooltip id="button-tooltip">See about</Tooltip>}
                >
                  <Nav.Link as={Link} to="/about" className="py-0">About</Nav.Link>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 100, hide: 100 }}
                  overlay={<Tooltip id="button-tooltip">View users</Tooltip>}
                >
                  <Nav.Link as={Link} to="/users" className="py-0">Users</Nav.Link>
                </OverlayTrigger>
              </Nav>
              <Nav>
                {props.isLogIn ? <><LogOutForm /></> : <><LogInForm /><RegistrationForm /></>}
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
    isLogIn: state.auth.isLogIn,
    email: state.auth.email
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
    authSucces: data => dispatch(authSucces(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NaviBar)