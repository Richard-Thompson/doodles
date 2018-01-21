import React, {Component} from 'react';
import Hero from './Hero';
import Nav from '../nav/Nav';

class Home extends Component {
    render () {
        return(
            <div className='home transition-item'>
                <Nav />
                <Hero />
                <div> This is home </div>
            </div>
        )
    }
}

export default Home;