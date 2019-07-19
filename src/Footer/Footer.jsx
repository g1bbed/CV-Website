import React, { Component, Fragment } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-section">
          <Grid>
            <GridColumn width={16}
            style={{ marginRight: "30px", marginTop: "10px" }}
          >
            <Button basic inverted color='olive' circular size='large' icon="mail" floated="right" />
            <Button basic inverted color='blue' circular size='large' icon="linkedin" floated="right" />
            <Button basic inverted color='grey' circular size='large' icon="file" floated="right" />
            </GridColumn>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
