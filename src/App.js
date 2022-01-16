import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import SignIn from './components/pages/SignIn';
import employee from './components/pages/employee';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={SignIn} />
          <Route path='/employee' exact component={employee} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
