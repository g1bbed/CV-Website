import React, { Component, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <Fragment>
        <Grid container doubling columns={2}>
          <GridColumn width={6} className="right">
            <h3>{education.title}</h3>
            <p>{education.date}</p>
          </GridColumn>
          <GridColumn width={1} only='large screen'/>
          <GridColumn width={9}>
            <h3>{education.category}</h3>
            <p>{education.description}</p>
          </GridColumn>
        </Grid>
        <hr />
      </Fragment>
    );
  }
}

export default Education;
