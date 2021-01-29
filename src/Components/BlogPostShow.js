import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getBlogPost } from '../Services/DatabaseCalls.js';

export default function BlogPostShow() {

    const [error, setError] = useState([]);

    const [blogPost, setBlogPost] = useState("");

    const [title, setTitle] = useState("");
    const [blurb, setBlurb] = useState("");
    const [artist, setArtist] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const { id } = useParams()

    let blogPostRequest

    useEffect(() =>
        {
        blogPostRequest = getBlogPost(id)
            .then(response => {
            console.log("blog post:",response)
            setBlogPost(response)
            // setTitle(response.title)
            // setBlurb(response.blurb)
            // setArtist(response.artist)
            // setImageUrl(response.image_url)
        })
        .catch(error => {
            setError("Something went wrong.")
        })
    }, []);

    useEffect(() => 
    {setBlogPost(blogPostRequest)}, [blogPostRequest]
  );

  if (!blogPost) {
    return <div>Loading...</div>
  } else {
  return (
      <div className="container">
        <Card>
            <Card.Header>
            <h1>{title}</h1>
            </Card.Header>
            <Card.Body>
            <Image src={blogPost.image_url} style={{maxWidth: "100%", maxHeight: "auto"}} thumbnail fluid />
            <h3>{blogPost.artist}</h3>
            <h3>{blogPost.year}</h3>
            <h3>{blogPost.like_count} visitors liked this painting.</h3>
            </Card.Body>
        </Card>
      </div>
    );
    }
}
