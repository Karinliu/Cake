import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Main, NotFound} from './pages';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  );
}

export default App;