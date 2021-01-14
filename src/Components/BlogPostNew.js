import React, { Component, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function BlogPostNew() {
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [wordCount, setWordCount] = useState("");
  const [likeCount, setLikeCount] = useState("");

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setName(value);
  }

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
  };

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
              name="blurb"
              value={blurb}
              onChange={e => setBlurb(e.target.value)}
              placeholder="blurb"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Artist</Form.Label>
            <Form.Control 
              type="text"
              name="artist"
              value={artist}
              onChange={e => setArtist(e.target.value)}
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
        </Form>
      </Card.Body>
    </Card>
  );
}