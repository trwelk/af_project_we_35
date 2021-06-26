import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import NavBar from './components/views/NavBar';
import WorkshopCard from './components/workshop/WorkshopCard';
import UserManagement from './pages/UserManagement';
import WorkshopDisp from './pages/WorkshopDisp';
import Header from './components/views/Header/Header';
import News from './pages/News';
import Workshops from './pages/Workshops';
import WorkshopOverview from './components/dashboard/WorkshopOverview';
import Chart from './components/dashboard/Chart';
function App() {
  return (
    <div className="App" >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WorkshopDisp} />
          <Route exact path="/ddss" component={WorkshopCard} />
          <Route exact path="/news" component={News} />
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/test" component={WorkshopOverview} />
          <Route exact path="/test1" component={Chart} />


          <Route exact path="/editor/workshops" component={UserManagement} />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
