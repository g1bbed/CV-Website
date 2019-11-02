import React, { Component } from "react";

class WindowWidth extends Component {

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

    render() {
        
      return (
        <React.Fragment>
        <p>height: {this.state.height}</p>
        <p>width: {this.state.width}</p>
      </React.Fragment>
      );
    }
  }
  
  export default WindowWidth;