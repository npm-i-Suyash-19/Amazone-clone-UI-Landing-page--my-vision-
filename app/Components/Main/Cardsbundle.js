"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/CardImg'


function Cards(props) {

  return (
    <>
        <div id='card-holder-inner'>
    <Card className='Cards' style={{ width: '350px' }}>
      <Card.Img className='CardImg' variant="top" src = {props.img1} alt='Image'/>
      <Card.Body>
        <Card.Title className='cardtitle'><h5>{props.title1}</h5></Card.Title>
        <Card.Text className='cardtext'>
            {props.text}
        </Card.Text>
        <Button className='btn' variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
    <Card className='Cards ' style={{ width: '350px' }}>
      <Card.Img className='CardImg' variant="top" src = {props.img2} alt='Image'/>
      <Card.Body>
        <Card.Title className='cardtitle'><h5>{props.title2}</h5></Card.Title>
        <Card.Text className='cardtext'>
            {props.text}
        </Card.Text>
        <Button className='btn' variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
    <Card className='Cards' style={{ width: '350px' }}>
      <Card.Img className='CardImg' variant="top" src = {props.img3} alt='Image'/>
      <Card.Body>
        <Card.Title className='cardtitle'><h5>{props.title3}</h5></Card.Title>
        <Card.Text className='cardtext'>
            {props.text}
        </Card.Text>
        <Button className='btn' variant="primary">{props.btn}</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default Cards;