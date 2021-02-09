import React, { Component, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
          <Button 
            className="btn-color" 
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
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">Left</Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
      </Card.Body>
    </Card>
  );
}