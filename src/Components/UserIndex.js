import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getUsers, useUserIndexStore } from '../Services/DatabaseCalls.js';
import Button from 'react-bootstrap/Button';

export default function UserIndex() {

  // const [users, setUsers] = useState([])
  // const [error, setError] = useState([])
  // let userRequest

  const getUsers = useUserIndexStore(state => state.axiosRequest)
  const users = useUserIndexStore(state => state.users)
  const errors = useUserIndexStore(state => state.errors)
  const loading = useUserIndexStore(state => state.loading)
  
    
    useEffect(() => {
      getUsers()
    }, []);

    if (loading) {
      return <div>Loading...</div>
    }
    if (errors.length > 0) {
      return <div>"Somethiing went wrong."</div>
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