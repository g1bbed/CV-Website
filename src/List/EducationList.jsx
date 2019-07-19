import React, { Component, Fragment } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';
import Education from './Education';

class EducationList extends Component {
    render() {
        return (
            <Fragment>
            <Grid container doubling columns={1}>
             <GridColumn width={6} className="right" only='computer'>
               <h2>Education</h2>
             </GridColumn>
             <GridColumn width={16} className="center" only='tablet mobile'>
               <h2>Education</h2>
             </GridColumn>
           </Grid>
           {this.props.educationdata.map(education => (
             <Education key={education.id} education={education} />
           ))}
         </Fragment>
        )
    }
}

export default EducationList;
