import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";


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
      content: <div className="w-44 md:w-96"><img src="nft/dragon1.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon2.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon3.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon4.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon1.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon2.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon3.png" alt="1" /></div>
    },
    {
      key: uuidv4(),
      content: <div className="w-44 md:w-96"><img src="nft/dragon4.png" alt="1" /></div>
    }]
//   .map((slide, index) => {
//     return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
//   });

//   onChangeInput = e => {
//     this.setState({
//       [e.target.name]: parseInt(e.target.value, 10) || 0
//     });
//   };

  render() {
    return (
      <div style={{ width: "100%", height: "250px", margin: "0 auto" }} className=''>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        {/* <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={e => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div> */}
      </div>
    );
  }
}
