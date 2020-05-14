import React from 'react';
import Dashboard from './Dashboard';
import Widgets from './Widgets';

import { Switch,Route } from 'react-router-dom';

function Content() {
  return (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/widgets" component={Widgets}/>
    </Switch>
  );
}

export default Content;
