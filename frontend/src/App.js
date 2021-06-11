import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/views/NavBar';
import WorkshopCard from './components/workshop/WorkshopCard';
import UserManagement from './pages/UserManagement';
function App() {
  return (
    <div className="App" >
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ UserManagement} />
          <Route exact path="/ddss" component={WorkshopCard} />
          <Route exact path="/" component={UserManagement} />
   
        <WorkshopCard />




        </Switch>
      </Router>
    </div>
  );
}

export default App;
