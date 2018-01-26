import React, {Component} from 'react';
import Hero from './Hero';
import Nav from '../nav/Nav';

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
            </div>
        )
    }

    handleClick (event) {
        this.something.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
}

export default Home;