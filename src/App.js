import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import SearchPage from './components/search/SearchPage';
import {polyfill} from 'smoothscroll-polyfill';
polyfill();

class App extends Component {
    render () {
        return(
            <Router>
            <div className="App">

              
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/Search' component={SearchPage} />
                    {/* <Route path='/page2' component={Page2} /> */}
                  </Switch>
            
            </div>
            </Router>
        )
    }
}

export default App;