import React, { Component, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const resetValues = () => {
        setEmail("");
        setPassword("");
      }

    const handleSubmit = (event) => {
    event.preventDefault() 
      createSession({
        email: email,
        password: password
      })
      .then(() => {
        resetValues()
      })
      .catch(() => {
        resetValues()
      })
  
      return (
        <Card>
          <Card.Header>Login
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email"
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
                  placeholder="password"
                  type="text"
                  name="password"
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
                Log In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      );
}
