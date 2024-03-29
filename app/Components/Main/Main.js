"use client"
import React from 'react'
import "./Main.css"
import CarouselComponent from './Carousel'
import Cards from './Cardsbundle'
import CardsLong from './CardsLong'
import Scrollcard from './Scroll'

const Main=()=>{



    return (
        <>
        <div id='carousel'>
        <CarouselComponent/>
        </div>
        <div id='card-holder-main'>
        <Cards sale1={"Upto 55% off"} img1={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title1={'Home Appliances'} text={'Hurry up! sale closes soon'} btn={'Visit Now'} sale2={"Upto 55% off"} img2={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title2={'Home Appliances'} sale3={"Upto 55% off"} img3={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title3={'Home Appliances'}/>
        <div id='card-holder-inner' className='marginTop'>
        <Cards sale1={"Upto 55% off"} img1={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title1={'Home Appliances'} text={'Hurry up! sale closes soon'} btn={'Visit Now'} sale2={"Upto 55% off"} img2={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title2={'Home Appliances'} sale3={"Upto 55% off"} img3={'/Images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'} title3={'Home Appliances'}/>
        </div>
<div id='hr'>
        <hr></hr>
        <h2> Shop from Sections</h2>
        <hr></hr>
</div>
        </div>
        <div id="card-holder-long">
            
            <div id='card-holder-align'>
        <CardsLong btn="Shop now" sale="50% OFF" desc="Description goes here!" title="Refrigerator"/>
        <CardsLong btn="Shop now" sale="50% OFF" desc="Description goes here!" title="Refrigerator"/>
        </div>
        </div>
        <div id='hr'>
        <hr></hr>
        <h2> Shop from Bestsellers</h2>
        <hr></hr>
        </div>
        <div id="card-holder-long2">
            
            <div id='card-holder-align'>
        <CardsLong btn="Shop now" sale="50% OFF" desc="Description goes here!" title="Refrigerator"/>
        <CardsLong btn="Shop now" sale="50% OFF" desc="Description goes here!" title="Refrigerator"/>
        </div>
        </div>

        <div id='hr'>
        <hr></hr>
        <h2> Specially For You</h2>
        <hr></hr>
        </div>

        <div id='scroll-bg'>
        <div id='scroll'>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
        </div>
        </div>
        <div id='hr'>
        <hr></hr>
        <h2> Featured</h2>
        <hr></hr>
        </div>

        <div id='scroll-bg'>
        <div id='scroll'>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
        </div>
        </div>

        <div id='hr'>
        <hr></hr>
        <h2> Trends </h2>
        <hr></hr>
        </div>

        <div id='scroll-bg'>
        <div id='scroll'>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
            <Scrollcard/>
        </div>
        </div>
        </>

    )
}
export default Main