import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

export default function Header() {
    return (
        <Jumbotron class="header">
            <h1 class="header-jumbo">I Like Felix Valotton</h1>
            <h1 class="header">This is my blog about Felix Valotton</h1>
        </Jumbotron>
    )
}