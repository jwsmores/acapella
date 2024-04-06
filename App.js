import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Members from './Members';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutUs} />
        <Route path="/members" component={Members} />
      </div>
    </Router>
  );
}

export default App;


