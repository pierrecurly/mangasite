import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import {
    Image
} from 'semantic-ui-react'

const imageStyle = {
    margin: '0 auto',
    width: '78%',
    height: '450px'
}

const textStyle = {
    background: '#FFFAF0',
    color: '#000',
}

const carouselStyle = {
    margin: '0 auto',
}

export default class MainCarousel extends Component {
    render() {
        return (
            <Carousel style={carouselStyle} autoPlay={true} showStatus={false} showThumbs={false} infiniteLoop={true}>
                <div>
                    <Image  style={imageStyle} src="assets/carousel/1.jpg" />
                    <p style={textStyle} className="legend">Violet Evergarden</p>
                </div>
                <div>
                    <Image style={imageStyle} src="assets/carousel/2.jpg" />
                    <p style={textStyle} className="legend">Tokyo Ghoul</p>
                </div>
                <div>
                    <Image style={imageStyle} src="assets/carousel/2.png" />
                    <p style={textStyle} className="legend">Violet Evergarden</p>
                </div>
                <div>
                    <Image style={imageStyle} src="assets/carousel/3.jpg" />
                    <p style={textStyle} className="legend">Violet Evergarden</p>
                </div>
            </Carousel>
        )
    }
}