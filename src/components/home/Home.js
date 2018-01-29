import React, {Component} from 'react';
import Hero from './Hero';
import Nav from '../nav/Nav';
import Card from './Card';
import Hand from '../../svg/write';
import ShoppingCart from '../../svg/shopping-cart';
import Explore from './Explore';

class Home extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    render () {
        return(
            <div className='home transition-item'>
                <Nav />
                <Hero handleClick={this.handleClick}/>
                <div ref={node => this.something = node}> This is home </div>
                <div className='card-section container'>
                    <div className='row'>
                        <Card col={'col-md-4'} icon={<ShoppingCart />} idx={300}/>
                        <Card col={'col-md-4'} idx={400}/>
                        <Card col={'col-md-4'} idx={500}/>
                        <Card col={'col-md-4'} idx={100}/>
                        <Card col={'col-md-4'} idx={400}/>
                        <Card col={'col-md-4'} idx={500}/>
                    </div>
                </div>
                {/* <Video /> */}
                <Explore />
            </div>
        )
    }

    handleClick (event) {
        this.something.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}

export default Home;