import React, {Component} from 'react';
import moment from 'moment';

class DoodleCard extends Component {
    constructor(props){
        super(props);
    }
    render () {
        let doodle = this.props.doodle.fields;
        let date = moment(doodle.date).format('DD MMMM YYYY')
        let styles = {
            backgroundImage:`url(https:${doodle.image.fields.file.url})`,
            backgroundPosition: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            transition: 'all .3s ease-in-out',
            overflow: 'hidden',
            height:'300px',
            width:'40%'
        }
        return (
            <div className='doodle-card col-sm-12 col-md-12'>
                        <div className='doodle-img' style={styles}></div>
                        <div className='doodle-details'>
                            <h2 className='doodle-title'>{doodle.name}</h2>
                            <p className='doodle-description'>{doodle.description}</p>
                            <p className='doodle-price'>{`£${doodle.price}`}</p>
                            <p className='doodle-size'>{doodle.size}</p>
                            <p className='sold'>{doodle.sold}</p>
                            <p className='date'>{date}</p>
                            <button>Add to cart</button>
                        </div>
            </div>
        )
    }
}

export default DoodleCard;