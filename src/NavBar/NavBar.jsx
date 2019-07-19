import React, { Component, Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";

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
            <Button basic circular size='large' icon="mail" floated="right" />
            <Button basic circular size='large' icon="linkedin" floated="right" />
            <Button basic circular size='large' icon="file" floated="right" />
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
}

export default NavBar;
