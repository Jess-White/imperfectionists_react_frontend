import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Header() {

  const [isDark, setIsDark] = useState("false");

  const handleDarkMode = () => {
    setIsDark(!isDark)
    console.log(isDark)
  };

    return (
        <Jumbotron class="header">
            <div>
            <h1 class="header-jumbo">I Like Felix Valotton</h1>
            </div>
            <h1>This is my blog about Felix Valotton</h1>
        </Jumbotron>
    )
}