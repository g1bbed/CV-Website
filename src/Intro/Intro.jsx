import React, { Component } from "react";
import { Grid, Image, Button, Responsive, Segment } from "semantic-ui-react";
import me from "../images/me.jpg";
import cv from "../files/StephanieClaireCurtisCV.pdf";

class Intro extends Component {
  render() {
    return (
      <div className="section1" style={{ padding: "5%" }}>
        <Grid doubling columns={2} verticalAlign="middle" reversed="computer">
          <Grid.Column width={6}>
            <Responsive
              as={Segment}
              minWidth={550}
              style={{
                padding: "0",
                margin: "0",
                background: "none",
                border: "none",
                boxShadow: "none"
              }}
            >
              <Image src={me} size="medium" circular centered />
            </Responsive>
            <Responsive
              as={Segment}
              maxWidth={549}
              style={{
                padding: "0",
                margin: "0",
                background: "none",
                border: "none",
                boxShadow: "none",
                marginTop: "20px"
              }}
            >
              <Image
                src={me}
                size="medium"
                circular
                centered
                style={{ marginTop: "-80px" }}
              />
            </Responsive>
          </Grid.Column>
          <Grid.Column width={10}>
            <h1 className="left" style={{ padding: "0px", margin: "0px" }}>
              About <span>Me</span>
            </h1>
            <h4 style={{ padding: "0px", margin: "0px" }}>
              Stephanie Claire Curtis - Front-end Developer and Graphic Designer
            </h4>
            <p style={{ fontSize: "18px" }}>
              I am a creative with an eye for detail who seeks new information.
              I really like to understand the complete process for creating Apps
              and Websites from Design straight to Front End Development. I
              enjoy working in a team, as the contributions each member brings
              helps the whole team learn much faster than a solo developer. I
              have produced close to five hundred websites and drafts for small
              businesses throughout Queensland.
            </p>

            <a href={cv} download>
              <Button size="mini" basic color="blue" type="submit">
                <b>DOWNLOAD MY CV</b>
              </Button>
            </a>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Intro;
