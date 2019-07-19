import React, { Component, Fragment } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Tool from "./Tool";

class ToolList extends Component {
  render() {
    return (
      <Fragment>
        <div className="section3" style={{ paddingTop: '40px', paddingBottom: '50px' }}>
          <Grid container>
            <GridColumn width={16} className="left" only="computer">
              <h2>Tools</h2>
            </GridColumn>
            <GridColumn width={16} className="center" only="tablet mobile">
              <h2>Tools</h2>
            </GridColumn>
          </Grid>
          <Grid container doubling>
            {this.props.tooldata.map(tool => (
              <Tool key={tool.id} tool={tool} />
            ))}
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default ToolList;
