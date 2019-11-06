import React, { Component, Fragment } from "react";
import Career from "./Career";

class CareerList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.careerdata.map(career => (
          <Career key={career.id} career={career} />
        ))}
      </Fragment>
    );
  }
}

export default CareerList;
