import React, { Component, Fragment } from "react";
import { Grid, Button, Popup } from "semantic-ui-react";
import cv from "../files/StephanieClaireCurtisCV.pdf";
import doc from "../files/CV.docx";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column
            width={16}
            style={{ marginRight: "1%", marginTop: "10px", zIndex: "999" }}
          >
            <Popup
              trigger={
                <Button
                  basic
                  circular
                  size="large"
                  icon="mail"
                  floated="right"
                  href="mailto:stephanieclairecurtis@gmail.com?subject=Hello"
                  target="_blank "
                  rel="noopener noreferrer"
                />
              }
              hoverable
              content="Contact me"
              position="bottom right"
            />
            <Popup
              trigger={
                <Button
                  href="https://www.linkedin.com/in/stephanie-curtis-126756122/"
                  target="_blank "
                  basic
                  circular
                  size="large"
                  icon="linkedin"
                  floated="right"
                />
              }
              hoverable
              content="Follow me on Linkedin"
              position="bottom right"
            />
            <Popup
              trigger={
                <Button
                  basic
                  circular
                  size="large"
                  icon="file"
                  floated="right"
                />
              }
              flowing
              hoverable
              position="bottom right"
            >
              <Grid centered divided columns={2}>
                <Grid.Column textAlign="center" style={{ width: "120px" }}>
                  <p style={{ paddingBottom: "0px", marginBottom: "7px" }}>
                    <b>My CV</b> in .pdf
                  </p>
                  <Button size="mini" href={cv} download>
                    Choose
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign="center" style={{ width: "120px" }}>
                  <p style={{ paddingBottom: "0px", marginBottom: "7px" }}>
                    <b>My CV</b> in .doc
                  </p>
                  <Button size="mini" href={doc} download>Choose</Button>
                </Grid.Column>
              </Grid>
            </Popup>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default NavBar;
