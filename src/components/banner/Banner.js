import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Slider1 from "../../assets/images/banner_img.png"
import Slider2 from "../../assets/images/slide2.jpg"
import Slider3 from "../../assets/images/slide3.jpg"
import "../../assets/style/banner.css"
import SlideContant1 from './SlideContant1';

const Banner = () => {
  return (
    <div>
        <AwesomeSlider>
            <div style={{background: `url(${Slider1})`}} ><SlideContant1/></div>
            <div style={{background: `url(${Slider2})`}} ><SlideContant1/></div>
            <div style={{background: `url(${Slider3})`}} ><SlideContant1/></div>          
        </AwesomeSlider>
    </div>
  )
}

export default Banner

