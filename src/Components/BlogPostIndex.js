import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { useBlogPostIndexStore } from '../Services/DatabaseCalls.js';
import { Link } from 'react-router-dom';

export default function BlogPostIndex() {

  const getBlogPosts = useBlogPostIndexStore(state => state.axiosIndexRequest)
  const blogPosts = useBlogPostIndexStore(state => state.blogPosts)
  const errors = useBlogPostIndexStore(state => state.errors)
  const loading = useBlogPostIndexStore(state => state.loading)
  
  useEffect(() => {
    getBlogPosts()
  }, []);

    if (loading) {
      return <div>Loading...</div>
    }
    if (errors.length > 0) {
      return <div>"Something went wrong."</div>
    }
    return (
      <div>
        {blogPosts.map(blogPost => 
          <Card className="dark:bg-blue-500 card">
            <Card.Header>
              <Link
                  to={`/blog_posts/${blogPost.id}`}
                >
                  {blogPost.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Image src={blogPost.image_url} style={{maxWidth: "40%", maxHeight: "auto"}} thumbnail fluid />
              <h3>{blogPost.artist}</h3>
              <h3>{blogPost.year}</h3>
              <h3>{blogPost.like_count} visitors liked this painting.</h3>
            </Card.Body>
          </Card>
        )}
      </div>
      );
  };