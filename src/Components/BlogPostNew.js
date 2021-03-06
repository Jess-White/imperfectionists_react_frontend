import React, { Component, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { createBlogPost, useBlogPostCreateStore } from '../Services/DatabaseCalls.js';

export default function BlogPostNew() {
  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // const [wordCount, setWordCount] = useState("");
  // const [likeCount, setLikeCount] = useState("");

  // const handleChange = (event) => {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   setName(value);
  // }

  const resetValues = () => {
    setTitle("");
    setBlurb("");
    setArtist("");
    setImageUrl("");
  }

  const handleSubmit = (event) => {
    event.preventDefault() 
      createBlogPost({
        title: title,
        blurb: blurb,
        artist: artist,
        image_url: imageUrl
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
      <Card.Header>Add New Felix Valotton Content!
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="title"
              type="text"
              name="title"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Blurb</Form.Label>
            <Form.Control 
              value={blurb}
              onChange={e => setBlurb(e.target.value)}
              placeholder="blurb"
              type="text"
              name="blurb"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Artist</Form.Label>
            <Form.Control 
              value={artist}
              onChange={e => setArtist(e.target.value)}
              placeholder="artist"
              type="text"
              name="artist"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image Url</Form.Label>
            <Form.Control 
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="image url"
              type="text"
              name="imageUrl"
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
            Add Blog Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}