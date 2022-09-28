import React, { Component,useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import NftCard from "../mint_page/cardPremium";

// / =========== Imagenes =================
import dragon1 from '../../public//nft/dragon1.png'
import dragon2 from '../../public//nft/dragon2.png'
import dragon3 from '../../public//nft/dragon3.png'
import dragon4 from '../../public//nft/dragon4.png'






export default function Slider(props) {


const [goToSlide, setstateGoToSlide] = useState(0);


  return (
    <div style={{ width: "100%", height: "450px", margin: "0 auto" }} className=''>
      <Carousel
        slides={props.category}
        goToSlide={goToSlide}
        // offsetRadius={this.state.offsetRadius}
        showNavigation={false}
      // animationConfig={this.state.config}
      />
      {/*-------- Buttoms ------- */}
      <div className='z-10 flex flex-row justify-center w-full mt-4 text-secondary'>
        {/* Button left */}
        <div className="z-50 mr-10 text-3xl transition duration-300 ease-in-out cursor-pointer hover:scale-150 "
          onClick={() => {
            setstateGoToSlide( goToSlide - 1 );
          }}>
          <MdOutlineArrowBackIosNew />
        </div>
        
        {/* button right */}
        <div className="z-50 ml-10 text-3xl transition duration-300 ease-in-out cursor-pointer hover:scale-150 "
          onClick={() => {
            setstateGoToSlide( goToSlide + 1 );
          }}>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );

}
