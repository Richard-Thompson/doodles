import React, {Component} from 'react';
import sectionOverlayCorners from '../../svg/doodles-type-section-overlay';

class Explore extends Component {
    render (){
        return(
            <div className='explore-wrapper container-fluid'>
                <div className='row'>
                    <div className='explore-text col-xl-6 col-md-12 col-sm-12'>
                        <h2 className='explore-title'>Explore the world of doodles.</h2>
                        <p className='explore-subheading'>Look through the various types of doodles I have and find your perfect doodle. Don't forget if you have an idea for a doodle get in contact.</p>
                    </div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                        <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}</div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
                    <a className='section-link'></a>
                        <div className='section-overlay'></div>
                        {sectionOverlayCorners()}
                    </div>
                    <div className='type-of-art-section col-xl-3 col-md-4 col-sm-6'>
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