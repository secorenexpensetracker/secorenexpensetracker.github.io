import React from 'react';
import './App.css';
import Home from './containers/static/Home';
import Header from './components/static/Header';
import PasswordStrength from './components/static/PasswordStrength';
import SignUp from './containers/static/SignUp';
import SignIn from './containers/static/SignIn';
import HowWorks from './containers/static/HowWorks';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './containers/static/About';
import ScrollToTop from './components/static/ScrollToTop';
import Dashboard from './containers/app/Dashboard';

function App() {
  return (
    <div id="main-container">
      <Router>
      <ScrollToTop>
      <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/howitworks">
            <HowWorks />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
      </Router>


    </div>
  );
}

export default App;


/*


<Router>
      <ScrollToTop>
      <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/howitworks">
            <HowWorks />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ScrollToTop>
      </Router>


*/