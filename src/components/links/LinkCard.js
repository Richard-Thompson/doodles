import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LinkCard extends Component {
    render() {
        let styles={
            backgroundImage: `url(http:${this.props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%'
        }
        return (
            <div className='link-card-outer col-sm-4'>
            <div className='link-card-inner ' style={styles} >
            <div className='link-overlay'></div>
                <div className='link-details'>
                    <a className='link-url' href={this.props.url}>{this.props.title}</a>
                </div>
            </div>
            </div>
        )
    }
}

export default LinkCard;