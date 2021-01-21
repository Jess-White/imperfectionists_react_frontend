import React, { Component, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { updateUser } from '../Services/DatabaseCalls.js';


export default function UserUpdate() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const resetValues = () => {
    setUserName(userName);
    setEmail(email);
    setPassword(password);
    setPasswordConfirmation(passwordConfirmation);
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
      updateUser({
        userName: userName,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation
      })
      .then(() => {
        resetValues()
      })
      .catch(() => {
        resetValues()
      })
  }

  return (
    <Card>
      <Card.Header>Update Your User Info
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>User Name</Form.Label>
            <Form.Control 
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder={userName}
              type="text"
              name="userName"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={email}
              type="text"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={password}
              type="text"
              name="password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control 
              value={passwordConfirmation}
              onChange={e => setPasswordConfirmation(e.target.value)}
              placeholder={passwordConfirmation}
              type="text"
              name="passwordConfirmation"
              required
            />
          </Form.Group>
          <Button 
            className="btn-lg" 
            style={{
              backgroundColor: "#ffff1b", 
              color: "#000080", 
              fontSize: "20px", 
              fontWeight: "bold",
              marginTop: "2%"
            }} 
            type="submit"
          >
            Update Info
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}