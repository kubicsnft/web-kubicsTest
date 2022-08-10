import React, { Component } from "react";

import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Cube from "../cube";


export default class Example extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.slow
    };

    slides = [
        {
            key: uuidv4(),
            content:
                <div className="w-full h-full">
                    <div className="relative flex justify-center overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                    <Cube link='./dragonKeeper' img='/img.png' />
                    </div>
                    <div className='p-4 mt-4 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                        <h3 className="mb-1 text-xl text-center text-white border-b border-secondary">DRAGONKEEPER</h3>
                        Lorem Ipsum is simply dummy text of the is simply dummy text of the  ever since the 1500s, and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </div>
                </div>
        },
        {
            key: uuidv4(),
            content:
                <div className="w-full hfull"><div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                    <Cube link='./test' />
                </div>
                    <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                        <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                    </div></div>
        },
        {
            key: uuidv4(),
            content:
                <div className="w-full hfull"><div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                    <Cube link='./test' />
                </div>
                    <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                        <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                    </div></div>
        },
        {
            key: uuidv4(),
            content:
                <div className="w-full hfull"><div className="relative flex overflow-hidden lg:w-36 lg:h-36 xl:w-48 xl:h-48 2xl:h-60 2xl:w-60 ">
                    <Cube link='./test' />
                </div>
                    <div className='p-3 mt-4 mb-48 text-sm text-justify text-white rounded-lg shadow-xl lg:w-36 xl:w-48 2xl:w-60 bg-primary'>
                        <h3 className="mb-1 text-xl text-center ">COMING SOON...</h3>
                    </div></div>
        },
    ]


    render() {
        return (
            <div style={{ width: "100%", height: "545px", margin: "0 auto" }} className='flex flex-col items-center '>
                <Carousel
                    slides={this.slides}
                    goToSlide={this.state.goToSlide}
                    offsetRadius={this.state.offsetRadius}
                    showNavigation={this.state.showNavigation}
                    animationConfig={this.state.config}
                />

            </div>
        );
    }
}