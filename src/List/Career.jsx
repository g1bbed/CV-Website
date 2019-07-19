import React, { Component, Fragment } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class Career extends Component {
  state = { activeIndex: 0 };

  render() {
    const { career } = this.props;

    const PhotoItem = ({ image, group }) => (
      <div style={{ maxWidth: "250px", width: "200px", padding: "5px" }}>
        <LightgalleryItem group={group} src={image}>
          <img src={image} style={{ width: "100%" }} alt="hi" />
        </LightgalleryItem>
      </div>
    );

    return (
      <Fragment>
        <Grid container doubling columns={2}>
          <GridColumn width={6} className="right">
            <h3>{career.title}</h3>
            <p>{career.date}</p>
          </GridColumn>
          <GridColumn width={1} only="large screen" />
          <GridColumn width={9}>
            <h3>{career.category}</h3>
            {career.description.map(description => (
              <p key={description.id} description={description}>
                {description.para}
              </p>
            ))}
            {career.button1.map(button1 => (
              <a href={button1.link} target="_blank" rel="noopener noreferrer">
              <Button
                size="mini"
                basic
                color="blue"
                key={button1.id}
                button1={button1}
              >
                <b>{button1.desc}</b>
              </Button>
              </a>
            ))}
            <LightgalleryProvider
              thumbnail="true"
              animateThumb="false"
              showThumbByDefault="false"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {career.gallery.map(gallery => (
                  <PhotoItem
                    key={gallery.id}
                    image={gallery.photo}
                    group="group1"
                  />
                ))}
              </div>
            </LightgalleryProvider>
          </GridColumn>
        </Grid>
        <hr />
      </Fragment>
    );
  }
}

export default Career;
