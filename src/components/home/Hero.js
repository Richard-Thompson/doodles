import React, {Component} from 'react';
import downArrow from '../../svg/down-arrow';
import {connect} from 'react-redux';
import {addHomePageSearchTerm} from '../../actions/doodles.actions';
import {withRouter} from 'react-router-dom';

class Hero extends Component {
    constructor(props){
        super(props);

        this.state={
            searchTerm: ''
        }
        this.searchOnChange = this.searchOnChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    render () {
        return(
            <div className='hero-wrapper'>
                <div className='overlay'></div>
                <div className="fullscreen-bg">
                    <video muted autoPlay poster="" className="fullscreen-bg-video">
                        <source src="videos/timelapse-drawing.mp4" type="video/mp4" />
                    </video>
                </div>
                <h1 className='title'>Find a doodle. Purchase. Admire.</h1>
                <form onSubmit={this.onSubmit} className='search-box'>
                    <input onChange={this.searchOnChange} value={this.state.searchTerm} className='search-input'></input>
                    <button className='search-button'>search</button>
                </form>
                <div className='down-arrows-wrapper' onClick={this.props.handleClick}>
                    {downArrow()}
                </div>
            </div>
        )
    }

    searchOnChange (event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    onSubmit(event) {
        this.props.addHomePageSearchTerm(this.state.searchTerm);
        this.props.history.push('/explore')

    }
}

function mapDispatchToProps (dispatch) {
    return {
        addHomePageSearchTerm: (searchTerm) => {
            dispatch(addHomePageSearchTerm(searchTerm))
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Hero));