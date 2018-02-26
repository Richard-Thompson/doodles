import React, { Component } from 'react';
import SearchButton from './SearchButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {getAllDoodles, addHomePageSearchTerm} from '../../actions/doodles.actions';
import DoodleList from './DoodleList';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showOptions: true,
            showTypes: false,
            types: ['Abstract', 'Xmas', 'Birds', 'black and white', 'Flowers'],
            showDates: false,
            dates:['Newest', 'Oldest'],
            showSold: false,
            sold:['For Sale','Sold'],
            searchTerm:'' || this.props.homePageSearchTerm
        }
        this.onClickArrowHandler = this.onClickArrowHandler.bind(this);
        this.onClickTypesHandler = this.onClickTypesHandler.bind(this);
        this.onClickDateHandler = this.onClickDateHandler.bind(this);
        this.onClickSoldHandler = this.onClickSoldHandler.bind(this);
        this.searchTermOnChange = this.searchTermOnChange.bind(this);
    }
    componentDidMount () {
        this.props.getAllDoodles();
    }
    componentWillUnmount () {
        this.props.addHomePageSearchTerm('');
    }
    render() {
        return (
            <section className='search-page-wrapper'>
            <div className='navbar-background'></div>
            {/* section where all the search capabilities lye*/}
                <div className='search-section'>
                    <h1>Search Page.</h1>
                    <form>
                        <input onChange={this.searchTermOnChange} value={this.state.searchTerm} placeholder='Search doodles here...'/>
                    </form>
                    <div className='lines-seperator'>
                        <div className={this.state.showOptions ? 'down-arrow-wrapper down-arrow' : 'down-arrow-wrapper'} onClick={this.onClickArrowHandler}>
                            <i className='fas fa-chevron-circle-down'></i>
                        </div>
                    </div>
                    <ReactCSSTransitionGroup transitionName="buttons" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                        {this.state.showOptions ?
                            <div className='search-options-wrapper'>
                                <SearchButton 
                                 wrapper={'search-type-wrapper'}
                                 onClick={this.onClickTypesHandler}
                                 buttonText={'Type of Art'}
                                 showOptions={this.state.showTypes}
                                 options={this.state.types}
                                />
                                <SearchButton 
                                 wrapper={'search-date-wrapper'}
                                 onClick={this.onClickDateHandler}
                                 buttonText={'Date'}
                                 showOptions={this.state.showDates}
                                 options={this.state.dates}
                                />
                                <SearchButton
                                wrapper={'search-sold-wrapper'}
                                onClick={this.onClickSoldHandler}
                                buttonText={'Sold?'}
                                showOptions={this.state.showSold}
                                options={this.state.sold}
                                />
                            </div>
                            : null}
                    </ReactCSSTransitionGroup>
                </div>
                {/* section where all the selected options show up */}
                <div className='search-options'>
                    {this.props.searchCriteria.map((option, i) => {
                        return (
                            <div className='option'>{option}</div>
                        )
                    })}
                </div>
                {/* section where the results come up based of the search criteria */}
                <div className='search-results'>
                    <DoodleList doodles={this.props.doodles} searchTerm={this.state.searchTerm}/>
                </div>

            </section>
        )
    }
    onClickArrowHandler() {
        this.setState({
            showOptions: !this.state.showOptions
        })
    }
    onClickTypesHandler(e) {
        this.setState({
            showTypes: !this.state.showTypes
        })
    }
    onClickDateHandler () {
        this.setState({
            showDates: !this.state.showDates
        })
    }
    onClickSoldHandler () {
        this.setState({
            showSold: !this.state.showSold
        })
    }
    searchTermOnChange (e) {
        this.setState({
            searchTerm: e.target.value
        })
    }
}

function mapStateToProps (state) {
    return {
        doodles: state.doodlesReducer.doodles,
        searchCriteria: state.doodlesReducer.searchCriteria,
        homePageSearchTerm: state.doodlesReducer.homePageSearchTerm
    }
} 

function mapDispatchToProps (dispatch) {
    return {
        getAllDoodles: () => {
            dispatch(getAllDoodles());
        },
        addHomePageSearchTerm: (searchTerm) => {
            dispatch(addHomePageSearchTerm(searchTerm));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);