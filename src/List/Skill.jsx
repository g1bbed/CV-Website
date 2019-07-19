import React, { Component, Fragment } from "react";
import { Grid, Progress } from "semantic-ui-react";

class Skill extends Component {
  render() {
    const { skill } = this.props;
    return (
      <Fragment>
        <Grid.Column width={8} className="skillcolumn">
          <span>{skill.title}</span>
          <Progress
            percent={skill.percent}
            color="blue"
            size="small"
            progress="percent"
          >
            <small>{skill.time}</small>
          </Progress>
        </Grid.Column>
      </Fragment>
    );
  }
}

export default Skill;
