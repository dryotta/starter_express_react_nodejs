import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a starter template for React, Node.js and Express.
      </p>
      <hr class="my-4" />
      <p>
        <Button variant="primary" as={Link} to="/carousels_test">Click me</Button>
      </p>
    </Jumbotron>
  );
}