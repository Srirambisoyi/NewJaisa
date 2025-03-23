import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './PromotionalBanner.css';

const PromotionalBanner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [priceRange, setPriceRange] = useState('');

  const handlePrev = () => {
    setActiveBanner(prev => (prev === 0 ? 1 : 0));
  };

  const handleNext = () => {
    setActiveBanner(prev => (prev === 0 ? 1 : 0));
  };

  const handleOptionChange = (e) => {
    setPriceRange(e.target.value);
  };

  const banners = [
    {
      id: 1,
      title: "Budget Buy",
      backgroundImage: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      options: [
        { value: "under10000", label: "Under ₹10,000" },
        { value: "10000to20000", label: "₹10,000 - ₹20,000" },
        { value: "20000to30000", label: "₹20,000 - ₹30,000" },
        { value: "30000to50000", label: "₹30,000 - ₹50,000" },
        { value: "above50000", label: "Above ₹50,000" }
      ],
      buttonText: "Shop on Range"
    },
    {
      id: 2,
      title: "Small and Medium Businesses",
      backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      buttonText: "Explore Now"
    }
  ];

  return (
    <div className="promotional-banner">
      <div className="banner-container">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className="banner-panel"
            style={{ 
              backgroundImage: `url(${banner.backgroundImage})`
            }}
          >
            <div className="banner-content">
              <h2 className="banner-title">{banner.title}</h2>
              
              <div className="banner-cta">
                {banner.options && (
                  <div className="select-container">
                    <select 
                      className="price-select" 
                      value={priceRange} 
                      onChange={handleOptionChange}
                    >
                      <option value="">Select Price Range</option>
                      {banner.options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                
                <button className="cta-button">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="banner-navigation">
        <button className="nav-button" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="nav-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default PromotionalBanner; 