import React, {Component} from 'react';
import sectionOverlayCorners from '../../svg/doodles-type-section-overlay';
import ExploreSection from './ExploreSection';

class Explore extends Component {
    render (){
        return(
            <div className='explore-wrapper container-fluid'>
                <div className='row'>
                    <div className='explore-text col-xl-6 col-md-12 col-sm-12'>
                        <h2 className='explore-title'>Explore the world of doodles.</h2>
                        <p className='explore-subheading'>Look through the various types of doodles I have and find your perfect doodle. Don't forget if you have an idea for a doodle get in contact.</p>
                    </div>
                    <ExploreSection type={'Religious'} url={'http://law451.com/wp-content/uploads/2017/01/Empty-Church.jpg'}/>
                    <ExploreSection type={'Flowers'} url={'https://i.pinimg.com/originals/1d/c4/00/1dc4006da05e7c4758d1b83b34beeff2.jpg'} />
                    <ExploreSection type={'Abstract'} url={'https://www.wallsauce.com/uploads/wallsauce-com/images/product-rooms/62229/2_10_0.jpg'} />
                    <ExploreSection type={'Birds'} url={'https://i.pinimg.com/736x/bc/28/5c/bc285c237c7341447c4e0eb34482a4b0--feather-design-peacock-design.jpg'} />
                    <ExploreSection type={'Christmass'} url={'https://image.shutterstock.com/z/stock-vector-doodle-frame-frame-made-of-various-fir-branches-snowflakes-and-christmas-decoration-abstract-316773791.jpg'} />
                    <ExploreSection type={'Other'} url={'https://qph.ec.quoracdn.net/main-qimg-864ad9bb9d1e4ded4324f121cd076a37-c'} />
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