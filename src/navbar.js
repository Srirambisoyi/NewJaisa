import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCube, 
  faMagnifyingGlass, 
  faMicrophone, 
  faStop,
  faXmark,
  faArrowRight,
  faHeadset,
  faCartShopping,
  faUser,
  faShop,
  faBars
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.start();
    } else {
      alert('Voice search is not supported in your browser.');
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
        <div className="logo">
            <a href="/">
              <div className="logo-wrapper">
                <div className="logo-icon">
                  <FontAwesomeIcon icon={faCube} />
                </div>
                <div className="logo-text">
                  <span className="logo-new">New</span>
                  <span className="logo-jaisa">Jaisa</span>
                </div>
              </div>
            </a>
          </div>

          {/* Search Bar */}
          <div className="search-container">
            <form onSubmit={handleSearch}>
              <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <input
                type="text"
                placeholder="What are you looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="voice-btn" onClick={handleVoiceSearch}>
                <FontAwesomeIcon icon={isListening ? faStop : faMicrophone} />
              </button>
              <button type="button" className="clear-btn" onClick={handleClear}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>

          {/* Right Navigation Items */}
          <div className="nav-right">
            <div className="contact-info">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div className="contact-text">
                <span>Talk to Experts</span>
                <span className="phone-number">+91-9026265699</span>
              </div>
            </div>
            
            <div className="nav-icons">
              <a href="/cart" className="icon-link" title="Cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
              <a href="/account" className="icon-link" title="Account">
                <FontAwesomeIcon icon={faUser} />
              </a>
              <a href="/store" className="icon-link" title="Store">
                <FontAwesomeIcon icon={faShop} />
                <span>Store</span>
              </a>
            </div>
        </div>

          {/* Mobile Menu Button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
