"use client"
import React from 'react'
import Divs from './Divs'
import Bars from './Menubar'

const Header2=()=>{
    return(
        <>
        <nav className='header2'>
        <Divs classN={'div-2'}/>
        <Bars/>
        <Divs classN={'div-2'} text={<><span>
             <p>Fresh</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>MiniTv</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Sell</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Best Seller</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Mobiles</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Deals</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Customer service</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Electronics</p>
                 </span>
        </>}/>
        <Divs classN={'div-2'} text={<><span>
             <p>Latest Releases</p>
                 </span>
        </>}/>
        </nav>
        </>
    )
}

export default Header2
