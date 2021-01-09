import React, { Component, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function BlogPostNew() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [wordcount, setWordcount] = useState("");
  const [finished, setFinished] = useState("");
  const [reviewed, setReviewed] = useState("");
  const [favorite, setFavorite] = useState("");
  // const [like, setLike] = useState("");
  const [name, setName] = useState("");
  

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setName(value);
  }

  return (
    <Card>
      <Card.Header>Add New Felix Valotton Content!
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="title"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Text</Form.Label>
            <Form.Control 
              type="text"
              name="text"
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="text"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type="text"
              name="author"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              placeholder="author"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>ImageUrl</Form.Label>
            <Form.Control 
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="Image URL"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Finished</Form.Label>
            <Form.Check
              type="checkbox"
              name="finished"
              value="finished"
              checked={finished}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Reviewed</Form.Label>
            <Form.Check
              type="checkbox"
              name="reviewed"
              value="reviewed"
              checked={reviewed}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Favorite</Form.Label>
            <Form.Check
              type="checkbox"
              name="favorite"
              value="favorite"
              checked={favorite}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}