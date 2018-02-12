import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        let styles = this.props.styles
        return(
            <nav style={styles} className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Abstract Art</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav my-4 ml-auto">
                    <li className="nav-item active">
                        <div className="nav-link" ><Link to='/'>Home</Link></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" ><Link to='/explore'>Explore</Link></div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav