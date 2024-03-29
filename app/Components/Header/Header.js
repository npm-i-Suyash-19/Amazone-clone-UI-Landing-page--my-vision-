"use client"
import React from 'react'
import Divs from './Divs'
import Input from './Input'
import Header2 from './Header2'
import styles from './Header.css'

const Header=()=>{
  return(
    <>
    <div className='responsive-hide'>
    <nav className='header'>
    <Divs classN={'div'} text={<img src="/Images/amazon-logo.png"/>}/>
      <div className='header-response'>
    <Divs classN={'div'} text={<><span>
             <p>Delivering to</p>
            <h5>Update location</h5>
                 </span>
        </>}/>
    <Divs classN={'div'} text={<><span><p>Language<select></select></p></span></>}/>
    <Divs classN={'div'} text={<><span>
             <p>Hello, sign in</p>
            <h5>Account & Lists              <select></select></h5>
                 </span>
        </>}/>
    <Divs classN={'div'} text={<><span>
             <p>Returns</p>
            <h5>& Orders</h5>
                </span>
        </>}/>
        </div>
    <Input type={"text"} placeholder={"Search Amazon"}/>
    <Divs classN={'div'} text={<h4 id='Sticky'>Cart</h4>}/>
    </nav>
        </div>
    <Header2/>
    </>
  )
}
export default Header 