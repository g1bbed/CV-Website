import React, { Component, Fragment } from "react";
import Sketch from "react-p5";
import logo0 from "./images/logo0.png";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";
import logo6 from "./images/logo6.png";
import logo7 from "./images/logo7.png";
import logo8 from "./images/logo8.png";
import logo9 from "./images/logo9.png";
import logo10 from "./images/logo10.png";
import logo11 from "./images/logo11.png";
import logo12 from "./images/logo12.png";
import logo13 from "./images/logo13.png";
import logo14 from "./images/logo14.png";


class Sketchp5 extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  logos = [ logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14 ];
  logosX = [
    -40,
    -5,
    18,
    50,
    88,
    126,
    156,
    194,
    210,
    245,
    293,
    310,
    343,
    360,
    387
  ];
  logosY = [
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150,
    150
  ];
  logoW = [35, 21, 31, 36, 35, 32, 35, 13, 31, 43, 13, 32, 13, 25, 31];
  logoH = [72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72];

  // preload = (logos, p5) => {
  //   for (let i = 0; i < 15; i ++ ) {
  //       logos[i] = loadImage(`./images/logo${i}.png`);
  //   }  
  // }

  setup = (p5, canvasParentRef, logos) => {
    p5.createCanvas(this.state.width, 250).parent(canvasParentRef);
    console.log(p5);
  };

  // draw = p5 => {
  //     p5.show();
  //     p5.move();
  //     p5.bounce();
  // };

  draw = p5 => {
    p5.background(0);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
    // p5.image(logo0, 10, 10, 10, 10)
  };

  mouseMoved = (p5, mouseX, mouseY ) => {
    for (let i = 0; i < 15; i++) {
      p5.clicked(mouseX, mouseY);
    }
  }

  mouseClicked = (p5, mouseX, mouseY ) => {
    for (let i = 0; i < 15; i++) {
      p5.clicked(mouseX, mouseY);
    }
  }

  windowResized = p5 => {
    p5.resizeCanvas(this.state.width, 250);
  };



  render() {
    return (
      <Fragment>
        <Sketch preload={this.preload} setup={this.setup} draw={this.draw} windowResized={this.windowResized}/>
      </Fragment>
    );
  }
}

export default Sketchp5;
