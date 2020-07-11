import React, { FormEvent, useState, ChangeEvent } from "react"
import { AppWrapper, AppContainer } from "../../../assets/styles/AppContainer"
import { Button, Form, Row } from "react-bootstrap"
import educonnectionsAPI from '../../../network/educonnectionsAPI';
import {GetAccountRequest, LoginRequest, VerifySessionRequest} from '../../../network/NetworkRequests'
import LoginRequestModel from '../../../network/models/authentication/LoginRequestModel'
import SessionContextProvider from '../../../state/context/SessionContext'

export default function Login () {

  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")

  function handleEmail (e: ChangeEvent<HTMLInputElement>) {
    setEmail (e.target.value)
  }

  function handlePassword (e: ChangeEvent<HTMLInputElement>) {
    setPassword (e.target.value)
  }

  async function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const loginRequest = new LoginRequestModel(email, password);
    const api = educonnectionsAPI.getApi();
    const request = LoginRequest(loginRequest);
    const instance =  await api.request(request);
    api.addAccessToken(instance.data.token);
    console.log(localStorage.getItem("token"));
    
  }

  return (
    <AppWrapper>
      <AppContainer>
        <Form onSubmit={handleSubmit}>
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
          <Row className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Row>
        </Form>
      </AppContainer>
    </AppWrapper>
  )
}