import React from "react";
import Image from 'next/image';
import Link from 'next/link'



function Cube(props) {

  const style ={
    cubeOn:'flex  h-12/12 w-12/12 cube  box   z-50 ',
    cubeOff:'flex  h-full w-full cube  box'
  }
    
  
    return (
        <>
          {props.img
            ? <div 
            className={style.cubeOn}>
              <Image src={props.img} width='110%' height='105%'  className='object-cover duration-150 ease-in ef-img'alt="cubo"/>
            </div>
            : <div className={style.cubeOff} ></div>
          }
        </>
    );
  }
  
  export default Cube