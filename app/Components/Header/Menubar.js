"use state"
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./Header.css"
function Bars(props) {
  return (
    <DropdownButton className='Bars-menu' id="dropdown-basic-button" color='#d57e0d' title={props.title}>
      <Dropdown.Item  href="#/action-1">{props.text1}</Dropdown.Item>
      <Dropdown.Item  href="#/action-2">{props.text2}</Dropdown.Item>
      <Dropdown.Item  href="#/action-3">{props.text3}</Dropdown.Item>
      <Dropdown.Item  href="#/action-4">{props.text4}</Dropdown.Item>
    </DropdownButton>
  );
}

export default Bars