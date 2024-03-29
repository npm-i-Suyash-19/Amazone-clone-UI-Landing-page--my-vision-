"use client"
import React, {useState} from 'react'


const Divs=(props)=>{
  return(
    <>
    <div className={props.classN} >
        {props.text}
    </div>
    </>
  )
}

export default Divs 