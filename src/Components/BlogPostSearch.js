import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useBlogPostIndexStore } from '../Services/DatabaseCalls.js';
import { Link } from 'react-router-dom';

export default function BlogPostSearch() {

  const getBlogPosts = useBlogPostIndexStore(state => state.axiosSearchRequest)
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

    <Card>
        <Card.Header>Search Paintings
        </Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Search By Title</Form.Label>
                    <Form.Control 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="title"
                    type="text"
                    name="title"
                    required
                    />
                </Form.Group>
            </Form>
        </Card.Body>
    </Card>
    
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