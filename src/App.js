// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer';
import Home from './pages/home'
// import About from './pages/About';
// ... import other pages

function App() {
  return (
    <Router>
      <Header />
      <Home/>
      <Footer/>
    </Router>
  );
}

export default App;
