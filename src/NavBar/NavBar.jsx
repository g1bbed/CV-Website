import React, { Component, Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";
import cv from "../files/StephanieClaireCurtisCV.pdf";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column
            width={16}
            style={{ marginRight: "30px", marginTop: "10px" }}
          >
            {/* <Button class="arrow-button" color="black" icon="angle down large" floated="right" style={{borderRadius: 0, height: '50px'}}/> */}
            <a
              href="mailto:stephanieclairecurtis@gmail.com?subject=Hello"
              target="_blank "
              rel="noopener noreferrer"
            >
              <Button basic circular size="large" icon="mail" floated="right" />
            </a>
            <a
              href="https://www.linkedin.com/in/stephanie-curtis-126756122/"
              target="_blank "
              rel="noopener noreferrer"
            >
              <Button
                basic
                circular
                size="large"
                icon="linkedin"
                floated="right"
              />
            </a>
            <a href={cv} download>
              <Button basic circular size="large" icon="file" floated="right" />
            </a>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default NavBar;
