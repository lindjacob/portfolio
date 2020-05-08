import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Menu from '../Menu/Menu';
import Resume from '../Views/Resume/Resume'
import YelpCopy from '../Views/YelpCopy/App/App';
import NotFound from '../Views/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Resume} />
          <Route path="/yelpcopy" component={YelpCopy} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;