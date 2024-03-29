"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';


function CardsLong(props) {

  return (
    <>
    <div id="Main-Card-Bg">
    <div id="Main-Card-pd">
    <div id="Main-Card">
    <div id="Main-Card-Img">
        <img src='/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'/>
    </div>
    <span id='text-span'>
    <p>{props.sale}</p>
        <h3>{props.title}</h3>
        <h5>{props.desc}</h5>
        <Button className='btn' variant="primary">{props.btn}</Button>
    </span>
    </div>
    </div>
    </div>
    </>
  );
}

export default CardsLong