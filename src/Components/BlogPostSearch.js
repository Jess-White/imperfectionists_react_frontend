import React, {useState, useEffect} from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useBlogPostIndexStore } from '../Services/DatabaseCalls.js';
import { Link } from 'react-router-dom';

export default function BlogPostSearch() {
  console.log('blog search page')

  const [searchParam, setSearchParam] = useState("")

  const searchBlogPosts = useBlogPostIndexStore(state => state.axiosSearchRequest)
  const blogPosts = useBlogPostIndexStore(state => state.blogPosts)
  const errors = useBlogPostIndexStore(state => state.errors)
  const loading = useBlogPostIndexStore(state => state.loading)
  const searchResults = useBlogPostIndexStore(state => state.searchResults)

  const handleSubmit = (event) => {
    event.preventDefault() 
    searchBlogPosts(searchParam);
    console.log('query sent')
  }


    if (loading) {
      return <div>Loading...</div>
    }
    // if (errors.length > 0) {
    //   return <div>"Something went wrong."</div>
    // }
    return (
      <div>
          <Card>
            <Card.Header>Search Paintings
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Search Paintings</Form.Label>
                        <Form.Control 
                        value={searchParam}
                        onChange={e => setSearchParam(e.target.value)}
                        placeholder="title"
                        type="text"
                        name="searchParam"
                        required
                        />
                    </Form.Group>
                    <Button onClick={handleSubmit}>Search</Button>
                </Form>
            </Card.Body>
          </Card>
        {searchResults && (
          <>
          {searchResults.map(searchResult => 
          <Card className="dark:bg-blue-500 card">
            <Card.Header>
              <Link
                  to={`/blog_posts/${searchResult.id}`}
                >
                  {searchResult.title}
              </Link>
            </Card.Header>
            <Card.Body>
              <Image src={searchResult.image_url} style={{maxWidth: "40%", maxHeight: "auto"}} thumbnail fluid />
              <h3>{searchResult.artist}</h3>
              <h3>{searchResult.year}</h3>
              <h3>{searchResult.like_count} visitors liked this painting.</h3>
            </Card.Body>
          </Card>
        )}
        </>
        )}
      </div>
      );
  };