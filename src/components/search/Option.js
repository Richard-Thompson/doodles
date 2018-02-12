import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSearchCriteria, addSoldCriteria, addDateCriteria} from '../../actions/doodles.actions';

class Option extends Component {
    constructor(props){
        super(props);
     
        this.state={
            active: false
        }
        this.isActive = this.isActive.bind(this);
    }

    render () {
        return (
            <li className={this.state.active ? 'active-option' : 'type-option'} onClick={this.isActive}>
                {this.props.option}
            </li>
        )
    }

    isActive () {
        this.props.addCriteria(this.props.option);
        this.props.soldCriteria(this.props.option);
        this.props.dateCriteria(this.props.option);
        this.setState({
            active: !this.state.active
        })
        this.props.showTypes();
    }
}

function mapStateToProps (state) {
    return {
        searchCriteria : state.doodlesReducer.searchCriteria
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addCriteria: (criteria) => {
            dispatch(addSearchCriteria(criteria));
        },
        soldCriteria: (criteria) => {
            dispatch(addSoldCriteria(criteria));
        },
        dateCriteria: (criteria) => {
            dispatch(addDateCriteria(criteria));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Option);