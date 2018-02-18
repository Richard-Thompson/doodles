import React, {Component} from 'react';
import Hero from './Hero';
import Card from './Card';
import ShoppingCart from '../../svg/shopping-cart';
import Notes from '../../svg/notes'; 
import Information from '../../svg/information';
import Blog from '../../svg/blog';
import Links from '../../svg/links';
import QuestionAndAnswer from '../../svg/q&a';
import Explore from './Explore';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return(
            <div className='home transition-item'>
                <Hero handleClick={this.handleClick}/>
                <div ref={node => this.something = node}> This is home </div>
                <div className='card-section container'>
                    <div className='row'>
                        <Link to='/explore'><Card col={'col-md-4'} icon={<ShoppingCart />} title={'Buy Art'} sentence={'Look for and buy new abstract doodles. Search through the categories to find your perfect doodle'} idx={300}/></Link>
                        <Link to='/pricing'><Card col={'col-md-4'} icon={<Notes />} title={'Pricing'} sentence={'Look at how the art is priced. It mainly depends on how much time the art takes to complete'} idx={400}/></Link>
                        <Link to='/about' ><Card col={'col-md-4'} icon={<Information />} title={'About'} sentence={'Find out about Tina Clarke. What drives her to make fantastic art. How she goes about completing a doodle'} idx={500}/></Link>
                        <Link to='/blog'><Card col={'col-md-4'} icon={<Blog />} title={'Blog'} sentence={'What to learn more about how Tina makes doodles and cool topics to improve your skills? take a look at her blog'} idx={100}/></Link>
                        <Card col={'col-md-4'} icon={<Links />} title={'Artisic Websites'} sentence={'Follow other websites related to doodles and art work and keep upto date with doodles and artwork'} idx={400}/>
                        <Card col={'col-md-4'} icon={<QuestionAndAnswer />} title={'Q & A'} sentence={'Some commonly asked questions with full answers, cant find and answer to your query? get in contact'} idx={500}/>
                    </div>
                </div>
                <Explore />
            </div>
        )
    }

    handleClick (event) {
        this.something.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}

export default Home;