"use client"
import React from "react"
import Bars from "./Menubar"

const Input = (props)=>{
    return(
        <>
        <div className="input-div">
            <h3><Bars id="Input-dropdown" title="All" text1="All" text2="Kids" text3="Fashion" text4="Electronics"/></h3>
        <input type={props.type} placeholder={props.placeholder}></input>
        <div className="input-icon">I</div>
        </div>
        </>
    )
}

export default Input