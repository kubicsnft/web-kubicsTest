import React from "react";
import Image from 'next/image';
import Link from 'next/link'
import { urlSource } from "ipfs-http-client";


function Cube(props) {

const style ={
  cube:'flex cursor-pointer h-[12rem] w-[12rem] cube  box'
}
  

  return (
      <Link href={props.link} >
        
          {/* ? <div className={style.cube} style={{backgroundImage: `url(${props.imag})`}} > */}
        {props.imag
          ? <div className={style.cube} >
            <img src={props.imag} className='duration-300 ease-in ef-img'/>
          </div>
          : <div className={style.cube} ></div>
        }
          
        
      </Link>
  );
}

export default Cube