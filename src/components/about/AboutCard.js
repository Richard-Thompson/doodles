import React, {Component} from 'react';
import OnVisible, { setDefaultProps } from 'react-on-visible';

setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 100
});

class AboutCard extends Component {
    render () {
        return(
            <OnVisible className='about-content'>
                <p className='about-card'>
                    {this.props.text}
                </p>
            </OnVisible>
        )
    }
}

export default AboutCard;