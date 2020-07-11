import React, { FormEvent, useState, ChangeEvent } from "react"
import { Form, Button, Row } from "react-bootstrap"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"

export default function Signup () {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const [passwordConfirmation, setPasswordConfirmation] = useState ("")

  function handleName (e: ChangeEvent<HTMLInputElement>) {
    setName (e.target.value)
  }
  
  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail (e.target.value)
  }

  function handlePassword (e: ChangeEvent<HTMLInputElement>) {
    setPassword (e.target.value)
  }

  function handlePasswordConfirmation (e: ChangeEvent<HTMLInputElement>) {
    setPasswordConfirmation (e.target.value)
  }

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault ()
    console.log("submitting form")
  }

  return (
    <AppWrapper>
      <AppContainer>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              onChange={handleName}
              placeholder="Enter name" 
              size="sm"
              type="text" 
              value={name}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              onChange={handleEmail}
              placeholder="Enter email" 
              size="sm"
              type="email" 
              value={email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={handlePassword}
              placeholder="Password" 
              size="sm"
              type="password" 
              value={password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control 
              onChange={handlePasswordConfirmation}
              placeholder="Confirm password" 
              size="sm"
              type="password" 
              value={passwordConfirmation}
            />
          </Form.Group>
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Row>
        </Form>
      </AppContainer>
  </AppWrapper>
  )
}