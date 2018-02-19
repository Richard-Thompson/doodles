import React, { Component } from 'react';
import LinkCard from './LinkCard';
import {connect} from 'react-redux';
import {getAllLinks} from '../../actions/content.actions';

class LinksPage extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount () {
        this.props.getAllLinks();
    }
    render() {
        return (
                <section className='links-page-wrapper'>
                    <div className='navbar-background'></div>
                    <h1 className='links-title'>Artistic Websites</h1>
                    <div className='links-wrapper container-fluid'>
                        <div className='row'>
                            {this.props.links.map((link, i) => {
                                return (
                                    <LinkCard key={i} title={link.fields.linkTitle} image={link.fields.linkImage.fields.file.url} url={link.fields.url} />
                                )
                            }, this)}
                            {console.log(this.props.links)}
                        </div>
                    </div>
                </section>
        )
    }
}

function mapStateToProps (state) {
    return {
        links: state.contentReducer.links
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getAllLinks: () =>{
            dispatch(getAllLinks());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);