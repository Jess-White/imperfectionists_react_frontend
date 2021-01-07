import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header() {
    return (
        <Jumbotron style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}}>
            <jumbotron style={{textAlign: "center", backgroundColor: "#3d3d3d", color: "#c5c5c5"}} className="jumbotron">I Like Felix Valotton</jumbotron>
            <h3>This is my blog about Felix Valotton</h3>
        </Jumbotron>
    )
}