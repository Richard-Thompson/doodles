import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';
import { connect } from 'react-redux';
import { getArticle } from '../../actions/blog.actions';

class ArticlePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getArticle(this.props.match.params.id)
    }
    render() {
        return (
            <div className='article-page-wrapper'>

                <div className='navbar-background'></div>
                <ReactMarkDown source={this.props.article.blogContent} />
                {console.log(this.props.article.blogContent)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        article: state.blogReducer.article
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticle: (articleId) => {
            dispatch(getArticle(articleId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);