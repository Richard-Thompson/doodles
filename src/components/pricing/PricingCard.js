import React, {Component} from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 100
});

class PricingCard extends Component {
    constructor(props){
        super(props);
    }
    render () {
        let styles={
            transitionDelay:`${this.props.timing}ms`
        }
        return (
            <OnVisible className='pricing-card-wrapper'>
            <div className='pricing-card' style={styles}>
                <h3 className='pricing-card-title'>{this.props.title}</h3>
                <div className='pricing-card-text'>{this.props.text}</div>
            </div>
            </OnVisible>
        )
    }
}

export default PricingCard;