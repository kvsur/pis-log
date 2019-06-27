import React from 'react';
import { HashRouter as Router, Route, /** Link */ } from "react-router-dom";
import Header from './Header';
import Log from './Log';
import styles from './App.module.less';

function App() {
  return (
    <main className={styles.App}>
      <Header />
      <Router>
        <Route path="/" exact component={Log} />
        <Route path="/log" component={Log} />
      </Router>
    </main>
  );
}

export default App;
