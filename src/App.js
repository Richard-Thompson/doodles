import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PageTransition from 'react-router-page-transition';
import Home from './components/home/Home';
import {polyfill} from 'smoothscroll-polyfill';
polyfill();

class App extends Component {
    render () {
        return(
            <Router>
            <div className="App">

              <Route
              render={({ location }) => (
                <PageTransition timeout={3000}>
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    {/* <Route path='/page1' component={Page1} />
                    <Route path='/page2' component={Page2} /> */}
                  </Switch>
                </PageTransition>
              )}
            />
            </div>
            </Router>
        )
    }
}

export default App;