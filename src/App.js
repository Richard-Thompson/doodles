import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import SearchPage from './components/search/SearchPage';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import PricingPage from './components/pricing/PricingPage';
import AboutPage from './components/about/AboutPage';
import BlogPage from './components/blog/BlogPage';
import ArticlePage from './components/blog/ArticlePage';
import LinksPage from './components/links/LinksPage';


// smoothscroll-polyfill is to allow me to use scrollIntoView on elements grabbed from the dom
import { polyfill } from 'smoothscroll-polyfill';
polyfill();


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
                        <Route path='/pricing' component={PricingPage} />
                        <Route path='/about' component={AboutPage} />
                        <Route exact path='/blog' component={BlogPage} />
                        <Route exact path='/blog/article/:id' component={ArticlePage} />
                        <Route path='/links' component={LinksPage} />
                    </Switch>
                    <Footer />
                </div>
            </Router >
        )
    }
}

export default App;