import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import SearchPage from './components/search/SearchPage';
import { polyfill } from 'smoothscroll-polyfill';
polyfill();

import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                {/* Nav is transparent and each page has a black div at top goes under nav, styled in nav.scss */}
                    <Nav />

                    <Switch location={location}>
                        <Route exact path='/' component={Home} />
                        <Route path='/explore' component={SearchPage} />
                        {/* <Route path='/page2' component={Page2} /> */}
                    </Switch>
                    <Footer />
                </div>
            </Router >
        )
    }
}

export default App;