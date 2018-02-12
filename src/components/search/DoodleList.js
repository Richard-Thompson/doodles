import React, {Component} from 'react';
import DoodleCard from './DoodleCard';
import {connect} from 'react-redux';
import {addFilterOptions} from '../../helpers/helpers.doodleList.js'

class DoodleList extends Component {
    constructor(props) {
        super(props);
    }
    render () {

        let filteredDoodles = this.props.doodles.filter((doodle) => {
            return this.props.sold ? 
            eval(`doodle.fields.sold === true && doodle.fields.name.toLowerCase().indexOf(this.props.searchTerm) !== -1${addFilterOptions(this.props.searchCriteria)}`)
            :
            eval(`doodle.fields.sold === false && doodle.fields.name.toLowerCase().indexOf(this.props.searchTerm) !== -1${addFilterOptions(this.props.searchCriteria)}`)
        }, this);

        let sorted = filteredDoodles.sort((a,b) => {
            console.log(b.fields.date);
            return this.props.date === 'Newest' ? new Date(a.fields.date) - new Date(b.fields.date) : new Date(b.fields.date) - new Date(a.fields.date);
        }, this)

        return(
            <div className='doodle-list-wrapper container-fluid'>
                <div className='row'>
                {console.log(sorted)}
                    {sorted.map((doodle,i) =>{
                        return(
                        <DoodleCard doodle={doodle} key={i} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        searchCriteria: state.doodlesReducer.searchCriteria,
        sold: state.doodlesReducer.sold,
        date: state.doodlesReducer.date
    }
}

export default connect(mapStateToProps, null)(DoodleList);