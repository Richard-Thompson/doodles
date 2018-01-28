import React, {Component} from 'react';
import sectionOverlayCorners from '../../svg/doodles-type-section-overlay';

class Explore extends Component {
    render (){
        return(
            <div className='explore-wrapper container-fluid'>
                <div className='row'>
                    <div className='explore-text col-md-6 col-sm-12'></div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                        <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}</div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-md-3 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                </div>

            </div>
        )
    }
}

export default Explore;