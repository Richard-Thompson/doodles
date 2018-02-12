import React, {Component} from 'react';
import Option from './Option';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SearchButton extends Component {
    render () {
        return (
        <div className={this.props.wrapper}>
            <div className='search-button-text' onClick={this.props.onClick}>{this.props.buttonText}<i className="fas fa-sort-down"></i></div>
            <ReactCSSTransitionGroup transitionName="options" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
                {this.props.showOptions ?
                    <ul className='list'>
                        {this.props.options.map(function (option, i) {
                            return (
                                <Option 
                                showTypes={this.props.onClick}
                                option={option} 
                                key={i} />
                            );
                        }.bind(this))}
                    </ul>
                    : null
                }
            </ReactCSSTransitionGroup>
        </div>
        )
    }
}

export default SearchButton;