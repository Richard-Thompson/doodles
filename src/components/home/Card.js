import React, {Component} from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 100
});

class Card extends Component {
    render () {
        return(
            <OnVisible className={`box ${this.props.col}`}>
                <div className={`card-wrapper`}
                    style={{
                        transitionDelay: `${this.props.idx}ms`
                }} >
                    <div className='inner-card-wrapper'>
                        <div className='icon'>
                            <div className='circle'>
                                <div className='circle-1'>
                                    {this.props.icon}
                                </div>
                            </div>
                        </div>
                        <div className='icon-text'>
                            <h2 className='icon-title'>Buy Art</h2>
                            <p className='icon-sentence'>Look for and buy new abstract doodles. Search through the categories to find your perfect doodle</p>
                        </div>
                    </div>
                </div>
            </OnVisible>
        )
    }
}

export default Card;