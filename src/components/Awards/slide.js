import React, { Component } from "react";
import Slider from "react-slick";
import sl1 from "../../assets/image/slider_1.png";
import sl2 from "../../assets/image/slider_2.png";
import sl3 from "../../assets/image/slider_3.png";
import sl4 from "../../assets/image/slider_4.png";
import sl5 from "../../assets/image/slider_5.png";

export default class Slide extends Component {
  render() {
    const imgs = [sl1, sl2, sl3, sl4, sl5, sl2, sl3, sl4, sl2, sl3, sl4, sl5];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplay: 1000,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {imgs.map((el, index) => {
            console.log(el);
            return (
              <div className="slider-item" key={index}>
                <img src={el} alt="" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
