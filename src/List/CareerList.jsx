import React, { Component, Fragment } from "react";
import Career from "./Career";
import { Grid, GridColumn } from "semantic-ui-react";

class CareerList extends Component {
  render() {
    return (
      <Fragment>
        <Grid container doubling columns={1}>
          <GridColumn width={6} className="right" only="computer">
            <h2>Career</h2>
          </GridColumn>
          <GridColumn width={16} className="center" only="tablet mobile">
            <h2>Career</h2>
          </GridColumn>
        </Grid>
        {this.props.careerdata.map(career => (
          <Career key={career.id} career={career} />
        ))}
      </Fragment>
    );
  }
}

export default CareerList;
