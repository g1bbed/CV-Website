import React, { Component, Fragment } from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";

class Career extends Component {
  state = { activeIndex: 0 };

  render() {
    const params = {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        1400: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    };

    const { career } = this.props;

    const PhotoItem = ({ image, group }) => (
      <LightgalleryItem group={group} src={image}>
        {/* <img src={image} style={{ width: "100%", height: "auto" }} alt="hi" /> */}
 
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="LightGallerySlider"
          ></div>

      </LightgalleryItem>
    );

    return (
      <Fragment>
        <LightgalleryProvider
          thumbnail="true"
          animateThumb="false"
          showThumbByDefault="false"
        >
          <Swiper {...params}>
            {career.gallery.map(gallery => (
              <div key={gallery.id}>
                <PhotoItem
                  key={gallery.id}
                  image={gallery.photo}
                  group="group1"
                />
              </div>
            ))}
          </Swiper>
        </LightgalleryProvider>
        <hr />

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
              <a
                href={button1.link}
                target="_blank"
                rel="noopener noreferrer"
                key={button1.id}
              >
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
          </GridColumn>
        </Grid>
        <hr />
      </Fragment>
    );
  }
}

export default Career;
