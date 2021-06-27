import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import NavBar from './components/views/NavBar';
import WorkshopCard from './components/workshop/WorkshopCard';
import Users from './pages/Users';
import Login from './pages/Login';
import WorkshopDisp from './pages/WorkshopDisp';
import WorkshopManagement from './pages/WorkshopManagement';
import LandingPage from './pages/LandingPage';
import Header from './components/views/Header/Header';
import News from './pages/News';
import Workshops from './pages/Workshops';
import ResearchPaperTable from './components/researchPaper/ResearchPaperTable';
import WorkshopOverview from './components/dashboard/WorkshopOverview';
import Chart from './components/dashboard/Chart';
import Dashboard from './pages/Dashboard';
import NavBar from './components/views/util/NavBar';
function App() {
  return (
    <div className="App" >
      <Router>

        <NavBar/>
        <Switch>

          <Route exact path="/" component={LandingPage} />
          <Route exact path="/ddss" component={WorkshopCard} />
          <Route exact path="/news" component={News} />
          <Route exact path="/workshops" component={Workshops} />
          <Route exact path="/test" component={WorkshopOverview} />
          <Route exact path="/test1" component={Chart} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/editor/workshops" component={WorkshopManagement} />
          <Route exact path="/editor/research" component={ResearchPaperTable} />
          <Route exact path="/editor/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
