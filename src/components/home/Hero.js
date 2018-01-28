import React, {Component} from 'react';
import arrows from '../../svg/down-arrows';

class Hero extends Component {
    render () {
        return(
            <div className='hero-wrapper'>
                <div className="fullscreen-bg">
                    <video muted autoPlay poster="" className="fullscreen-bg-video">
                        <source src="videos/timelapse-drawing.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='title-wrapper'>
                    <h2 className='main-title'>Need Fresh New Doodles?</h2>
                    <p className='tag-line'>Take a look at the doodles and order one today. Checkout the new doodles section for fresh new doodles. Have an idea? get in contact.</p>
                </div>
                <div className='down-arrows-wrapper' onClick={this.props.handleClick}>
                    {arrows()}
                </div>
            </div>
        )
    }
}

export default Hero;