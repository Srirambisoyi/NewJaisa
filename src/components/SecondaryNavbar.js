import React, { useState } from 'react';
import './SecondaryNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
  faChevronDown,
  faLaptop,
  faGraduationCap,
  faBriefcase,
  faMoon,
  faBuilding,
  faStore,
  faEllipsisH,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

function SecondaryNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="secondary-navbar">
      <div className="secondary-container">
        <div className="categories-dropdown">
          <button className="all-categories-btn">
            <FontAwesomeIcon icon={faBars} />
            <span>All Categories</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>

        <div className="nav-links">
          <a href="/macbook" className="nav-link">
            <FontAwesomeIcon icon={faLaptop} />
            <span>MacBook</span>
          </a>
          
          <a href="/products" className="nav-link">
            <span>Products</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
          
          <a href="/students" className="nav-link">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Students</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
          
          <a href="/businesses" className="nav-link">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Businesses</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
          
          <a href="/dream-on" className="nav-link">
            <FontAwesomeIcon icon={faMoon} />
            <span>Dream On</span>
          </a>
          
          <a href="/company" className="nav-link">
            <FontAwesomeIcon icon={faBuilding} />
            <span>Company</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
          
          <a href="/store" className="nav-link">
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
          </a>
          
          <a href="/more" className="nav-link">
            <FontAwesomeIcon icon={faEllipsisH} />
            <span>More</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </div>

        <div className="stock-price">
          <FontAwesomeIcon icon={faArrowUp} className="stock-arrow" />
          <span className="price">44.45</span>
          <span className="change positive">(4.96%)</span>
          <span className="label">NSE Price</span>
        </div>
      </div>
    </nav>
  );
}

export default SecondaryNavbar; 