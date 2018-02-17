import React, { Component } from 'react';
import ReactMarkDown from 'react-markdown';
import { connect } from 'react-redux';
import { getArticle } from '../../actions/blog.actions';
import moment from 'moment';

class ArticlePage extends Component {
    constructor(props) {
        super(props);

        this.renderAuthorImg = this.renderAuthorImg.bind(this);
        this.renderMainImg = this.renderMainImg.bind(this);
    }
    componentDidMount() {
        this.props.getArticle(this.props.match.params.id)
    }
    render() {
        let {article} = this.props;
        let date = moment(article.date).format('DD MMM YY')
        return (
            <div className='article-page-wrapper'>
                <div className='navbar-background'></div>
                <div className='article-details'>
                    {this.renderAuthorImg(article)}
                    <div className='details-wrapper'>
                        <p className='details'>{article.authorName}</p>
                        <p className='details'>{article.authorTagline}</p>
                        <p className='details'>{`${date} (${article.readTime} min read)`}</p>
                    </div>
                </div>
                <h1><strong>{article.articleTitle}</strong></h1>
                {this.renderMainImg(article)}
                <ReactMarkDown escapeHtml={false} className={'main-content'} source={article.blogContent} />
                {console.log(this.props.article)}
            </div>
        )
    }

    renderAuthorImg (article) {
        return this.props.article.authorImage ? (<img src={article.authorImage.fields.file.url} />) : null;
    }

    renderMainImg (article) {
        let styles = this.props.article.mainImage ? {backgroundImage: `url(https:${article.mainImage.fields.file.url}`} : {};
    return this.props.article.mainImage ? (<div className='main-img' style={styles}></div>) : null;
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