import React, {Component} from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 100
});

class AboutCard extends Component {
    render () {
        let styles = {
            transitionDelay: `${this.props.timing*100}ms`
        }
        return(
            <OnVisible className='about-content'>
                <p className='about-card' style={styles}>
                    {this.props.text}
                </p>
            </OnVisible>
        )
    }
}

export default AboutCard;