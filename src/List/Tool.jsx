import React, { Component, Fragment } from "react";
import { Grid, Progress } from "semantic-ui-react";

class Tool extends Component {
  render() {
    const { tool } = this.props;
    return (
      <Fragment>
        <Grid.Column width={8} className="toolcolumn">
          <span>{tool.title}</span>
          <Progress
            percent={tool.percent}
            color="blue"
            size="small"
            progress="percent"
          >
            <small>{tool.time}</small>
          </Progress>
        </Grid.Column>
      </Fragment>
    );
  }
}

export default Tool;
