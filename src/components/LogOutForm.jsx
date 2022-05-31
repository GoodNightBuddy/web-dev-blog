import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react"
import { connect } from "react-redux";
import { logOut } from "../store/actions/auth";



function LogOutForm(props) {

  const [showLogOut, setShowLogOut] = useState(false);
  const handleCloseLogOut = () => setShowLogOut(false);
  const handleShowLogOut = () => setShowLogOut(true);
  const logOutClose = () => {
    setShowLogOut(false)
    props.logOut()
  }

  return (
    <>

      <Button variant="primary" className="m-sm-2 my-1" onClick={handleShowLogOut}>Log out</Button>

      <Modal show={showLogOut} onHide={handleCloseLogOut}>
        <Modal.Header closeButton>
          <Modal.Title>Log out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogOut}>
            Close
          </Button>
          <Button variant="primary" onClick={logOutClose}>
            LogOut
          </Button>
        </Modal.Footer>
      </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogOutForm)