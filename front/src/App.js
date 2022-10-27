import React from 'react';
import './App.css';
import Footer from './components/footer';
import NavSide1 from './components/Nav-Side1';
import NavSide2 from './components/Nav-Side2';
import TopMainNav from './components/TopMainNav';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <TopMainNav />
        <div className="d-flex">
          <NavSide1 />
          <main></main>
          <NavSide2 />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
