import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import me from "../images/me.jpg";

class Intro extends Component {
  render() {
    return (
      <div className="section1" style={{ padding: "5%" }}>
        <Grid doubling columns={2} verticalAlign="middle" reversed="computer">
          <Grid.Column width={6}>
            <Image src={me} size="medium" circular centered />
          </Grid.Column>
          <Grid.Column width={10}>
            <h1 className="left" style={{ padding: "0px", margin: "0px" }}>
              About <span>Me</span>
            </h1>
            <h4 style={{ padding: "0px", margin: "0px" }}>
              Stephanie Claire Curtis - Front-end Developer and Graphic Designer
            </h4>
            <p>
              I am a creative who seeks new information. I really
              like to understand the complete process for creating Apps and
              Websites from Design straight to Front End Development. I have an
              eye for detail and practice design techniques and rules. Also, I
              like working in a team, you'll learn faster and much more. I have
              produced close to five hundred websites and drafts for small
              businesses throughout Queensland.
            </p>
            <form method="get" action="file.doc">
              <Button size="mini" basic color="blue" type="submit">
                <b>DOWNLOAD MY CV</b>
              </Button>
            </form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Intro;
