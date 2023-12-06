import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MoreContent from './components/More_content';
import Home from './components/Home';
import Map from './components/Map';
import Navbar from './components/Navbar';
import Mapaimagen from './components/Mapaimagen';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/map" component={Map} />
          <Route path="/more_content" component={MoreContent} />
          <Route path="/InteractiveMap" component={Mapaimagen} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
