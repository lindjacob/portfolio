import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import Menu from '../Menu/Menu';
import Resume from '../Views/Resume/Resume'
import Ravenous from '../Views/Ravenous/Ravenous';
import NotFound from '../Views/NotFound/NotFound';
import Jammming from '../Views/Jammming/Jammming';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Resume} />
          <Route path="/ravenous" component={Ravenous} />
          <Route path="/jammming" component={Jammming} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;