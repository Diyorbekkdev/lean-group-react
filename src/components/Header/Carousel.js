import React, { Component } from "react";
import Slider from "react-slick";
import './Header.scss'
import LeanCard from "./LeanCard";
import social from '../../assets/image/fa.png';
import social2 from '../../assets/image/ins.png';
import social3 from '../../assets/image/tg.png';
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="home">
        <Slider {...settings}>
            <div className="wrap wrap1">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
                <ul className="icon">
                    <img src={social} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                </ul>
            </div>
            <div className="wrap wrap2">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
                <ul className="icon">
                    <img src={social} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                </ul>
            </div>
            <div className="wrap wrap3">
                <div className="card_wrapper">
                    <LeanCard/>
                </div>
                <ul className="icon">
                    <img src={social} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                </ul>
            </div>
        </Slider>
      </div>
    );
  }
}