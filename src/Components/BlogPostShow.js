import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { getBlogPost, useBlogPostShowStore } from '../Services/DatabaseCalls.js';

export default function BlogPostShow() {

    const getBlogPost = useBlogPostShowStore(state => state.axiosRequest)
    const blogPost = useBlogPostShowStore(state => state.blogPost)
    const errors = useBlogPostShowStore(state => state.errors)
    const loading = useBlogPostShowStore(state => state.loading)

    const [title, setTitle] = useState(blogPost.title)
    const [artist, setArtist] = useState(blogPost.artist);
    const [imageUrl, setImageUrl] = useState(blogPost.image_url);
    const [likeCount, setLikeCount] = useState(blogPost.like_count)
    const [year, setYear] = useState(blogPost.year)

    const { id } = useParams()

    useEffect(() => {
      getBlogPost(id)
    }, []);

    useEffect(() => {
      setArtist(blogPost.artist);
      setTitle(blogPost.title);
      setArtist(blogPost.artist);
      setImageUrl(blogPost.image_url);
      setLikeCount(blogPost.like_count);
      setYear(blogPost.year);
    }, [blogPost]
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
            <Image src={imageUrl} style={{maxWidth: "100%", maxHeight: "auto"}} thumbnail fluid />
            <h3>{artist}</h3>
            <h3>{year}</h3>
            <h3>{likeCount} visitors liked this painting.</h3>
            </Card.Body>
        </Card>
      </div>
    );
    }
}
