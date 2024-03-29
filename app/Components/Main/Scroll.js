"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Main.css"

function Scrollcard(props) {
  return (
    <Card className='scroll-card' style={{width: "160px"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='scroll-body'>
        <Card.Title className='scroll-title'>Title</Card.Title>
        <Button className='scroll-button' variant="primary">Shop</Button>
      </Card.Body>
    </Card>
  );
}

export default Scrollcard