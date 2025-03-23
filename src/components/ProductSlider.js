import React, { useState } from 'react';
import './ProductSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import RatingDisplay from './RatingDisplay';

function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Refurbished MacBook Pro 2020 | Touchbar, Two Thunderbolt 3 Ports',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fG1hY2Jvb2slMjBwcm98ZW58MHx8fHwxNzE2NjMzMDI2fDA&ixlib=rb-4.0.3&q=80&w=400',
      price: 43999,
      originalPrice: 105990,
      discount: '58% Off',
      stock: { count: 4, status: 'low' },
      sellingFast: true
    },
    {
      id: 2,
      name: 'Refurbished MacBook Air 2017 Model | 13" Display | Intel i5',
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8fHwxNzE2NjMzMDk2fDA&ixlib=rb-4.0.3&q=80&w=400',
      price: 22999,
      originalPrice: 79999,
      discount: '71% Off',
      stock: { count: 9, status: 'low' },
      sellingFast: true
    },
    {
      id: 3,
      name: 'Refurbished Lenovo ThinkPad X13 | i5-10th Gen | 13.3" HD | Windows 10',
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGxlbm92byUyMGxhcHRvcHxlbnwwfHx8fDE3MTY2MzMxNDZ8MA&ixlib=rb-4.0.3&q=80&w=400',
      price: 24499,
      originalPrice: 49999,
      discount: '51% Off',
      stock: { count: 41, status: 'in' },
      sellingFast: false
    },
    {
      id: 4,
      name: 'Refurbished HP Chromebox Mini PC | i7-4th gen | Windows 10',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fG1pbmklMjBwY3xlbnwwfHx8fDE3MTY2MzMxNzh8MA&ixlib=rb-4.0.3&q=80&w=400',
      price: 9999,
      originalPrice: null,
      discount: null,
      stock: { count: 47, status: 'in' },
      sellingFast: false
    },
    {
      id: 5,
      name: 'Refurbished Dell Latitude 5320 | Intel i5-11th Gen | 13.3" HD | Windows 10',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGRlbGwlMjBsYXRpdHVkZXxlbnwwfHx8fDE3MTY2MzMyMDN8MA&ixlib=rb-4.0.3&q=80&w=400',
      price: 24349,
      originalPrice: null,
      discount: null,
      stock: { count: 25, status: 'in' },
      sellingFast: false
    }
  ];

  const visibleProducts = products.slice(currentIndex, currentIndex + 4);
  
  const nextSlide = () => {
    setCurrentIndex(prev => 
      prev + 1 >= products.length - 3 ? 0 : prev + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => 
      prev - 1 < 0 ? products.length - 4 : prev - 1
    );
  };

  const formatPrice = (price) => {
    return '₹ ' + price.toLocaleString('en-IN');
  };

  return (
    <section className="product-slider-section">
      <div className="product-slider-container">
        <h2 className="product-slider-title">
          Trending Tech, <span className="highlight">Earth-Friendly Vibes</span>
        </h2>
        
        <div className="product-slider">
          <button 
            className="slider-nav prev" 
            onClick={prevSlide}
            aria-label="Previous products"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="product-cards">
            {visibleProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <div className="product-image-wrapper">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="product-image"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x200';
                      }}
                    />
                    <div className="security-overlay">
                      <div className="security-content">
                        <div className="security-logo">
                          <div className="security-badge">
                            <span>Included</span>
                          </div>
                          <div className="security-text">
                            <h4>Quick Heal Secured</h4>
                            <p>Refurbished PC's</p>
                          </div>
                        </div>
                        
                        <div className="security-details">
                          <div className="security-providers">
                            <small>Powered by</small>
                            <div className="provider-logos">
                              <span>GoDeep.AI</span>
                              <span>malwareprotect</span>
                            </div>
                          </div>
                          
                          <div className="security-features">
                            <small>Protection includes</small>
                            <ul>
                              <li>Safe Banking</li>
                              <li>Webcam Protection</li>
                            </ul>
                          </div>
                          
                          <div className="security-warranty">
                            <div className="warranty-badge">
                              <span>1 Year Protection</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="product-details">
                  <div className="product-stock">
                    <span className={`stock-status ${product.stock.status}`}>
                      {product.stock.status === 'low' ? 'Low' : 'In'} stock ({product.stock.count} units)
                    </span>
                    
                    {product.sellingFast && (
                      <span className="selling-fast">
                        Selling Fast <FontAwesomeIcon icon={faFire} />
                      </span>
                    )}
                  </div>
                  
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-price">
                    <div className="current-price">
                      {formatPrice(product.price)}
                    </div>
                    
                    {product.originalPrice && (
                      <div className="price-details">
                        <span className="original-price">
                          {formatPrice(product.originalPrice)}
                        </span>
                        
                        {product.discount && (
                          <span className="discount-badge">
                            {product.discount}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                <button className="quick-view-btn">Quick view</button>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-nav next" 
            onClick={nextSlide}
            aria-label="Next products"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        
        <RatingDisplay />
      </div>
    </section>
  );
}

export default ProductSlider; 