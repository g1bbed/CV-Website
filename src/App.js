import React, { Component } from "react";
import "./fonts/stylesheet.css";
import "./App.css";
import NavBar from "./NavBar/NavBar";
import { Grid } from "semantic-ui-react";
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

const careerdata = Careers;
const educationdata = Educations;
const tooldata = Tools;
const skilldata = Skills;


class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        {/*Unfortunately there is no p5 support in react to date so an iframe is used in this case*/}
        <iframe
          src="https://editor.p5js.org/stephanieclaire/embed/nEtA2Kp-P"
          scrolling="no"
          title="iframe"
          frameBorder="0" 
          seamless
          style={{
            width: "100%",
            height: "270px",
            border: 0,
            marginTop: "-50px",
            overflow: "hidden",
            marginLeft: '20px'

          }}
        ></iframe>
        <Intro />
        <Grid>
          <Grid.Column width={16}>
            <h1 className="center">
              <span>My</span> Experiences.
            </h1>
            <hr className="header2" />
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={16}>
            <EducationList educationdata={educationdata} />
            <CareerList careerdata={careerdata} />
          </Grid.Column>
        </Grid>
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
      </div>
    );
  }
}

export default App;
