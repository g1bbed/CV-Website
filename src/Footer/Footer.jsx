import React, { Component, Fragment } from "react";
import { Grid, GridColumn, Button, Popup } from "semantic-ui-react";
import cv from "../files/StephanieClaireCurtisCV.pdf";
import doc from "../files/CV.docx";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-section">
          <Grid>
            <GridColumn
              width={16}
              style={{ marginRight: "30px", marginTop: "10px" }}
            >
              <p className="center white">
                <small>
                  Created with React and Semantic UI -{" "}
                  <a
                    href="https://github.com/g1bbed/CV-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    view github repo
                  </a>
                </small>
              </p>
              <Popup
                trigger={
                  <Button
                    basic
             
                    inverted
                    color="olive"
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
                position="top right"
                style={{zIndex: 999, position: 'absolute' }}
              />
              <Popup
                trigger={
                  <Button
                    href="https://www.linkedin.com/in/stephanie-curtis-126756122/"
                    target="_blank "
                    rel="noopener noreferrer"
                    basic
                    inverted
                    color="blue"
                    circular
                    size="large"
                    icon="linkedin"
                    floated="right"
                  />
                }
                hoverable
                content="Follow me on Linkedin"
                position="top right"
              />
<Popup
              trigger={
                <Button
                basic
                inverted
                color="grey"
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
            </GridColumn>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
