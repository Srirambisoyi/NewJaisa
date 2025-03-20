import React from 'react';
import './App.css';
import Navbar from './navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <Footer />
    </div>
  );
}

export default App;
