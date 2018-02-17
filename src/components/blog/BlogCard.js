import React, { Component } from 'react';
import moment from 'moment';

class BlogCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let article = this.props.content.fields
        let date = moment(article.date).format('DD MMM YY')
        let styles = {
            backgroundImage:`url(https:${article.mainImage.fields.file.url})`
        }
        return (
            <div className='xl-blog-card'>
                <div className='xl-img' style={styles}></div>
                <div className='xl-details'>
                    <h3 className='xl-title'><strong>{article.articleTitle}</strong></h3>
                    <div className='xl-description'>{article.description}</div>
                    <div className='xl-publisher'>
                        <img src={article.authorImage.fields.file.url} />
                        <div className='xl-publisher-details'>
                            <div className='xl-publisher-name'>{article.authorName}</div>
                            <div className='xl-publisher-date'>{date} {`(${article.readTime} min read)`}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogCard;