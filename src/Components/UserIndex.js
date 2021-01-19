import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getUsers } from '../Services/DatabaseCalls.js';
import Button from 'react-bootstrap/Button';

export default function UserIndex() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState([])
  let userRequest
  
  useEffect(() => 
      {userRequest = getBlogPosts()
        .then(response => {
          setUsers(response)
        }).catch(error => {
          setError("Something went wrong.")
        })
      }, []);

  useEffect(() => {setUsers(userRequest)}, [userRequest]);

    if (!users.map) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          {users.map(user => 
            <Card>
              <Card.Header><h1>{user.user_name}</h1></Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          )}
        </div>
      );
    }
  };