import React, { Component, Fragment } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import cv from "../files/StephanieClaireCurtisCV.pdf";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-section">
          <Grid>
            <GridColumn width={16}
            style={{ marginRight: "30px", marginTop: "10px" }}
          ><p className="center white"><small>Created with React and Semantic UI - <a href="https://github.com/g1bbed/CV-Website" target="_blank" rel="noopener noreferrer">view github repo</a></small></p>
            <a
              href="mailto:stephanieclairecurtis@gmail.com?subject=Hello"
              target="_blank "
              rel="noopener noreferrer"
            >
            <Button basic inverted color='olive' circular size='large' icon="mail" floated="right" />
            </a>
            <a
              href="https://www.linkedin.com/in/stephanie-curtis-126756122/"
              target="_blank "
              rel="noopener noreferrer"
            >
            <Button basic inverted color='blue' circular size='large' icon="linkedin" floated="right" />
            </a>
            <a href={cv} download>
            <Button basic inverted color='grey' circular size='large' icon="file" floated="right" />
            </a>
            </GridColumn>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
