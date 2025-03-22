import React from 'react';
import './App.css';
import Navbar from './navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import ReasonsBanner from './components/ReasonsBanner';
import Faq from './components/Faq';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <ReasonsBanner />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
