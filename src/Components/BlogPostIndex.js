import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getBlogPosts } from '../Services/DatabaseCalls.js';
import Button from 'react-bootstrap/Button';

export default function BlogPostIndex() {

  const [blogPosts, setBlogPosts] = useState([])
  const [error, setError] = useState([])
  let blogPostRequest
  
  useEffect(() => 
      {blogPostRequest = getBlogPosts()
        .then(response => {
          setBlogPosts(response)
        }).catch(error => {
          setError("Something went wrong.")
        })
      }, []);

  useEffect(() => {setBlogPosts(blogPostRequest)}, [blogPostRequest]);

    if (!blogPosts.map) {
      return <div>Loading...</div>
    }
    else {
      return (
        <div>
          {blogPosts.map(blogPost => 
            <Card>
              <Card.Header>{blogPost.title}</Card.Header>
              <Card.Body>
                <Image src={blogPost.image_url} style={{maxWidth: "40%", maxHeight: "auto"}} thumbnail fluid />
                <h3>{blogPost.artist}</h3>
                <h3>{blogPost.year}</h3>
                <h3>{blogPost.like_count}</h3>
              </Card.Body>
            </Card>
          )}
        </div>
      );
    }
  };