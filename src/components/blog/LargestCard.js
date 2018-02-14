import React, { Component } from 'react';

class LargestCard extends Component {
    render() {
        return (
            <div className='xl-blog-card col-md-4'>
                <div className='xl-img'></div>
                <div className='xl-details'>
                    <h3 className='xl-title'><strong>Abstract Art Face- the love of the world</strong></h3>
                    <div className='xl-description'>{this.props.description}</div>
                    <div className='xl-publisher'>
                        <img src='http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/abstract-6.jpg' />
                        <div className='xl-publisher-details'>
                            <div className='xl-publisher-name'>R. Thompson</div>
                            <div className='xl-publisher-date'>12 Feb . 5 min read</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LargestCard;