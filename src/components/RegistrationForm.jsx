import React, { useState } from "react";
import { Button, Container, Modal, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { register } from "../store/actions/auth";


function RegistrationForm(props) {

  const [showRegistration, setShowRegistration] = useState(false);
  const handleCloseRegistration = () => setShowRegistration(false);
  const handleShowRegistration = () => setShowRegistration(true);

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  })


  const handleForm = async (data, event) => {
    await props.register(data, event.target.elements.checkbox.checked)
    reset()
  }

  const handleError = (data, event) => {
    console.log(data, event, 'Validation Error');
  }

  let registerErrors = {
    email: {},
    password: {}
  }

  if (props.error) {
    let res = props.error.response.data.error.message.split('').map((el, index) => {
      if (index === 0) return el
      if (el === "_") return " "
      return el.toLowerCase()
    }).join('')

    registerErrors.email.message = res
    registerErrors.email.error = props.error
  }

  // if (props.state.isLogIn) { console.log(props.state) }

  // console.log(props.state.isLogIn);
  return (
    <>
      <Button variant="primary" className="m-sm-2 my-1" onClick={handleShowRegistration}>Register</Button>

      <Modal show={showRegistration} onHide={handleCloseRegistration}>


        <Modal.Header closeButton>
          <Modal.Title>Registration</Modal.Title>
        </Modal.Header>
        <Form noValidate onSubmit={handleSubmit(handleForm, handleError)} id="loginForm">
          <Container className="px-3 mt-2">
            <Row className="">

              <Form.Group as={Col} xs="12" controlId="email" className="" style={{ minHeight: '110px' }} >
                <Form.Label>Enter your email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  {...register('email', {
                    required: "This field is required",
                    pattern: {
                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Enter correct mail"
                    }
                  })}
                />
                {errors.email ? <div style={{ color: 'red', fontSize: "0.75rem" }} className="error mt-1">{errors.email.message}</div> : null}
                {/* {Object.keys(registerErrors.email).length ? <div style={{ color: 'red', fontSize: "0.75rem" }} className="error mt-1">{registerErrors.email.message}</div> : null} */}
              </Form.Group>

            </Row>

            <Row className="">
              <Form.Group as={Col} xs="12" controlId="password" className="" style={{ minHeight: '110px' }}>
                <Form.Label>Enter your password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  defaultValue=""
                  {...register('password', {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters"
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.-]*$/,
                      message: "Only english letters or numbers"
                    }
                  })}
                />

                {errors.password ? <div style={{ color: 'red', fontSize: "0.75rem" }} className="error mt-1">{errors.password.message}</div> : null}
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                name="checkbox"
                label="Remember me"
                id="checkbox"
              />
            </Form.Group>

          </Container>
          <Container className="p-3 d-flex flex-row-reverse" style={{ borderTop: '1px solid #dee2e6' }}>
            <Button type="submit" disabled={!isValid || props.loading}>Register</Button>
          </Container>

        </Form>
      </Modal>
    </>
  );
}

function mapStateToProps(state) {
  return {
    state: state.auth,
    error: state.auth.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    register: (data, autoLogin) => dispatch(register(data, autoLogin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)
