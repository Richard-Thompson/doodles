import React, {Component} from 'react';
import arrows from '../../svg/down-arrows';

class Hero extends Component {
    render () {
        return(
            <div className='hero-wrapper'>
                <div className='hero-img'></div>
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