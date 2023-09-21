import React from 'react';
import {
  IonApp,
} from '@ionic/react';
import { Dashboard } from './pages/Dashboard';
import { DetailsProd } from './pages/DetailsProd';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return(
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard}>
      </Route>
      <Route path="/DetailsProd" component={DetailsProd} />
    </Switch>
  </Router>
  );

  };

export default App;
