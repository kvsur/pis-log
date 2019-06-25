import React from 'react';
import { BrowserRouter as Router, Route, /** Link */ } from "react-router-dom";
import Header from './Header';
import Log from './Log';

function App() {
  return (
    <main className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Log} />
        <Route path="/log" component={Log} />
      </Router>
    </main>
  );
}

export default App;
