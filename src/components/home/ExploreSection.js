import React, {Component} from 'react';
import sectionOverlayCorners from '../../svg/doodles-type-section-overlay';

class ExploreSection extends Component {
    render () {
        let styles={
            backgroundImage: `url(${this.props.url})`,
            height: '0',
            width: '100%',
            paddingBottom: '75%',
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transition: 'all .3s ease-in-out',
            display: 'block',
            overflow: 'hidden',
            position: 'relative'
        }
        return (
            <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                <div className='section-link' style={styles}></div>
                <div className='section-overlay'>
                    <div className='type'>{this.props.type}</div>
                </div>
                {sectionOverlayCorners()}
            </div>
        )
    }
}

export default ExploreSection;