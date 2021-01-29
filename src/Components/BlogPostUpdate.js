import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { updateBlogPost, getBlogPost } from '../Services/DatabaseCalls.js';


export default function BlogPostUpdate() {
  
  const [error, setError] = useState([]);

  const [title, setTitle] = useState("");
  const [blurb, setBlurb] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { id } = useParams()

  useEffect(() =>
    {
      getBlogPost(id)
        .then(response => {
        console.log("blog post:",response)
        // setTitle(response.data.title)
        // setBlurb(response.data.blurb)
        // setArtist(response.data.artist)
        // setImageUrl(response.data.image_url)
      })
      .catch(error => {
        setError("Something went wrong.")
      })
  }, []);

  const resetValues = () => {
    setTitle("");
    setBlurb("");
    setArtist("");
    setImageUrl("");
  }

  const handleSubmit = (event) => {
    event.preventDefault() 

      updateBlogPost({
        id,
        title,
        blurb,
        artist,
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
      <Card.Header>Update Painting Info
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control 
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={title}
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
              placeholder={blurb}
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
              placeholder={artist}
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
              placeholder={imageUrl}
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
            Update Blog Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}