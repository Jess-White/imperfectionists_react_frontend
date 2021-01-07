import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

export default function About() {
    return (
        <Jumbotron style={{
          backgroundColor: "#3d3d3d",
          color: "#c5c5c5",
          padding: "2%",
          margin: "0%"}}>
            <h5></h5>
            <h5>Check out the repos for this project:</h5>
            <h5>Please feel free to check out my <a 
                style={{color: "#fafafa"}}
                href="https://github.com/Jess-White/hill_of_beans_react_app">portfolio</a>, <a 
                style={{color: "#fafafa"}}
                href="https://github.com/Jess-White/hill_of_beans_react_app">linkedin</a>, and 
                <a 
                style={{color: "#fafafa"}}
                href="https://github.com/Jess-White/hill_of_beans_react_app"> github</a> as well!
            </h5>
        </Jumbotron>
    )
}