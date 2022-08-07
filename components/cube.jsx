import React from "react";
import Image from 'next/image';
import Link from 'next/link'



function Cube(props) {

  const style ={
    cubeOn:'flex  h-full w-full cube  box  cursor-pointer z-50',
    cubeOff:'flex  h-full w-full cube  box'
  }
    
  
    return (
        <Link href={props.link} >
          
            {/* ? <div className={style.cube} style={{backgroundImage: `url(${props.imag})`}} > */}
          {props.link
            ? <div className={style.cubeOn} >
              <img src={props.img} className='duration-300 ease-in ef-img'/>
            </div>
            : <div className={style.cubeOff} ></div>
          }
            
          
        </Link>
    );
  }
  
  export default Cube