import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
          <ul>
              <div>
              <Nav className="mr-auto">
                <Nav.Item style={{fontSize: "150%"}} className="active">
                  <Nav.Link href="/blog_posts">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item style={{fontSize: "150%"}} className="active">
                  <Nav.Link href="/blog_posts-new">Hang Painting</Nav.Link>
                </Nav.Item>
                </Nav>
                </div>
          </ul>
        </Navbar>
    );
}

export default withRouter(Navigation);