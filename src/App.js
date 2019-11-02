import React, { Component } from "react";
import "./fonts/stylesheet.css";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import { Grid, Segment, Responsive } from "semantic-ui-react";
import CareerList from "./List/CareerList";
import Careers from "./data/Careers";
import Educations from "./data/Educations";
import EducationList from "./List/EducationList";
import Tools from "./data/Tools";
import Skills from "./data/Skills";
import ToolList from "./List/ToolList";
import SkillList from "./List/SkillList";
import Footer from "./Footer/Footer";
import Intro from "./Intro/Intro";
import "lightgallery.js/dist/css/lightgallery.css";
import logo from "./images/logo.png";
import LazyLoad from "react-lazyload";

const careerdata = Careers;
const educationdata = Educations;
const tooldata = Tools;
const skilldata = Skills;

class App extends Component {
  render() {
    return (
      <Responsive className="App">
        <NavBar />
        <Responsive className="noborders">
          {/*Unfortunately there is very little p5 support in react to date so an iframe is used in this case*/}
          <Responsive as={Segment} minWidth={550} className="holds-the-iframe">
            <LazyLoad height={190} datasource="/path/to/original">
              <iframe
                src="https://editor.p5js.org/stephanieclaire/embed/nEtA2Kp-P"
                scrolling="no"
                title="iframe"
                frameBorder="0"
                preload="none"
                onLoad={this.hideSpinner}
                seamless
                style={{
                  width: "100%",
                  height: "270px",
                  border: 0,
                  marginTop: "-50px",
                  paddingLeft: "20px",
                  zIndex: "-1"
                }}
              />
            </LazyLoad>
          </Responsive>

          <Responsive as={Segment} maxWidth={549} className="MobileLogo">
          <LazyLoad height={190} datasource="/path/to/original">
            <iframe
              src="https://editor.p5js.org/stephanieclaire/embed/nEtA2Kp-P"
              scrolling="no"
              title="iframe"
              frameBorder="0"
              preload="none"
              onLoad={this.hideSpinner}
              seamless
              style={{
                width: "600px",
                height: "270px",
                border: 0,
                marginTop: "-90px",
                paddingLeft: "20px",
                zIndex: "-1",
              }}
            />
            </LazyLoad>
          </Responsive>
        </Responsive>
        <Intro />
        <Grid>
          <Grid.Column width={16}>
            <h1 className="center">
              <span>My</span> Experiences.
            </h1>
            <hr className="header2" />
          </Grid.Column>
        </Grid>
  
            <CareerList careerdata={careerdata} />
            <EducationList educationdata={educationdata} />

        <div className="section3">
          <Grid>
            <Grid.Column width={16}>
              <h1 className="center">
                <span>My</span> Abilities.
              </h1>
              <hr className="header2" />
            </Grid.Column>
          </Grid>
        </div>

        <SkillList skilldata={skilldata} />
        <ToolList tooldata={tooldata} />
        <Footer />
      </Responsive>
    );
  }
}

export default App;
