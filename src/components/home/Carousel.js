import React, {Component} from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
    render () {
            var settings = {
                centerMode: true,
                infinite: true,
                centerPadding: '100px',
                slidesToShow: 1,
                speed: 500,
                className: 'slider'
            };
            return (
              <Slider {...settings}>
                <div className='slide'><h3>1</h3></div>
                <div className='slide'><h3>2</h3></div>
                <div className='slide'><h3>3</h3></div>
                <div className='slide'><h3>4</h3></div>
                <div className='slide'><h3>5</h3></div>
                <div className='slide'><h3>6</h3></div>
              </Slider>
            );
          
    }
}

export default Carousel;