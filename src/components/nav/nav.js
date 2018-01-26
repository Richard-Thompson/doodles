import React, {Component} from 'react';

class Nav extends Component {
    render () {
        return(
            <div className='nav-wrapper'>
                <div className='title-nav-wrapper'>
                    <h1 className='title'>Abstract Art </h1>
                    <p className='author'>by Tina Clarke</p>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav