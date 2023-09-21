import React from 'react';
import {
  IonApp,
} from '@ionic/react';
import { Dashboard } from './pages/Dashboard';
import { DetailsProd } from './pages/DetailsProd';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { MyContextProvider } from './Contexto/context';

const App: React.FC = () => {
  return(
  <Router>
    <MyContextProvider>
    <Switch>
      <Route exact path="/" component={Dashboard}>
      </Route>
      <Route path="/DetailsProd" component={DetailsProd} />
    </Switch>
    </MyContextProvider>
  </Router>
  );

  };

export default App;
