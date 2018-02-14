import React, {Component} from 'react';
import LargestCard from './LargestCard';

class BlogPage extends Component {
    render () {
        return (
            <section className='blog-page-wrapper'>
                <div className='navbar-background'></div>
                <div className='articles container-fluid'>
                    <h2 className='articles-title'>Articles</h2>
                    <div className='row'>
                        <LargestCard description={'This is the perfect article about the wonderful life of davinci, he was a master of art and loved drawing images and hated paint'}/>
                        <LargestCard />
                        <LargestCard />
                        <LargestCard />
                        <LargestCard />
                        <LargestCard />
                    </div>
                </div>
            </section>
        )
    }
}

export default BlogPage;