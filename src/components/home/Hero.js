import React, {Component} from 'react';
import downArrow from '../../svg/down-arrow';

class Hero extends Component {
    render () {
        return(
            <div className='hero-wrapper'>
                <div className='overlay'></div>
                <div className="fullscreen-bg">
                    <video muted autoPlay poster="" className="fullscreen-bg-video">
                        <source src="videos/timelapse-drawing.mp4" type="video/mp4" />
                    </video>
                </div>
                <h1 className='title'>Find a doodle. Purchase. Admire.</h1>
                <form className='search-box'>
                    <input className='search-input'></input>
                    <select className='search-type' name='Type of Art'>
                        <option value="value1">Value 1</option> 
                        <option value="value2" selected>Value 2</option>
                        <option value="value3">Value 3</option>
                    </select>
                    <button className='search-button'>search</button>
                </form>
                <div className='down-arrows-wrapper' onClick={this.props.handleClick}>
                    {downArrow()}
                </div>
            </div>
        )
    }
}

export default Hero;