import React, { Component, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Skill from "./Skill";

class SkillList extends Component {
  render() {
    return (
      <Fragment>
        <div className="section3">
          <Grid container>
            <GridColumn width={16} className="left" only="computer">
              <h2>Skills</h2>
            </GridColumn>
            <GridColumn width={16} className="center" only="tablet mobile">
              <h2>Skills</h2>
            </GridColumn>
          </Grid>
          <Grid container doubling>
            {this.props.skilldata.map(skill => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default SkillList;
