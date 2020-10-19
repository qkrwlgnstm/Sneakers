import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sneakersdetail from './pages/Sneakersdetail';

import './App.scss';
import './style/reset.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Sneakersdetail />
      </Router>
    </div>
  );
}

export default App;
