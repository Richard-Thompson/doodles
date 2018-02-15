import React, { Component } from 'react';
import BlogCard from './BlogCard';
import { connect } from 'react-redux';
import { getAllArticles } from '../../actions/blog.actions';
import {Link} from 'react-router-dom';

class BlogPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getAllArticles();
    }
    render() {
        return (
            <section className='blog-page-wrapper'>
                <div className='navbar-background'></div>
                <div className='articles container-fluid'>
                    <h2 className='articles-title'>Articles</h2>
                    <div className='row'>
                        {this.props.articles.map((article, i) => {
                            return (
                                <Link to={`/blog/article/${article.sys.id}`} className=' article-link col-md-4'>
                                <BlogCard content={article} key={i} />
                                </Link> 
                            )
                        }, this)}
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        articles: state.blogReducer.articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllArticles: () => {
            dispatch(getAllArticles());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);