import React, { useState } from 'react';
import './NewDropsSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const NewDropsSlider = () => {
  const [activeCategory, setActiveCategory] = useState('best-sellers');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "Refurbished HP ProBook 430 G6 | Intel i5 8th Gen | 13.3\" HD | Win 11",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 14499,
      originalPrice: 89999,
      discount: 83,
      stock: 54,
      category: "best-sellers"
    },
    {
      id: 2,
      name: "Refurbished HP 14s | Intel i5 10th Gen | 14\" HD | Win 11",
      image: "https://images.unsplash.com/photo-1629757509637-7c99379d6d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 20999,
      originalPrice: 89999,
      discount: 76,
      stock: 93,
      category: "best-sellers"
    },
    {
      id: 3,
      name: "Refurbished HP ProBook 640 G5 | Intel i5 8th Gen | 14\" HD | Win 11",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 15999,
      originalPrice: 89999,
      discount: 82,
      stock: 56,
      category: "best-sellers"
    },
    {
      id: 4,
      name: "Refurbished Dell XPS 13 | Intel i7 11th Gen | 13.3\" FHD | Win 11",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 29999,
      originalPrice: 129999,
      discount: 77,
      stock: 32,
      category: "new-arrivals"
    },
    {
      id: 5,
      name: "Refurbished Lenovo ThinkPad T14 | AMD Ryzen 5 | 14\" FHD | Win 11",
      image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 22499,
      originalPrice: 95999,
      discount: 76,
      stock: 41,
      category: "new-arrivals"
    },
    {
      id: 6,
      name: "Refurbished MacBook Air M1 | 8GB RAM | 256GB SSD | macOS",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 54999,
      originalPrice: 92900,
      discount: 41,
      stock: 19,
      category: "new-arrivals"
    },
    {
      id: 7,
      name: "Refurbished ASUS ZenBook 14 | Intel i7 11th Gen | 14\" FHD | Win 11",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 26999,
      originalPrice: 99999,
      discount: 73,
      stock: 28,
      category: "best-sellers"
    },
    {
      id: 8,
      name: "Refurbished Dell Latitude 7420 | Intel i5 11th Gen | 14\" FHD | Win 11",
      image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 18999,
      originalPrice: 79999,
      discount: 76,
      stock: 35,
      category: "best-sellers"
    },
    {
      id: 9,
      name: "Refurbished Microsoft Surface Laptop 4 | AMD Ryzen 5 | 13.5\" Touch | Win 11",
      image: "https://images.unsplash.com/photo-1637607699874-b181c9b7e6c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 32999,
      originalPrice: 129999,
      discount: 74,
      stock: 18,
      category: "new-arrivals"
    },
    {
      id: 10,
      name: "Refurbished Lenovo IdeaPad Slim 5 | Intel i5 11th Gen | 15.6\" FHD | Win 11",
      image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 17999,
      originalPrice: 69999,
      discount: 74,
      stock: 47,
      category: "best-sellers"
    },
    {
      id: 11,
      name: "Refurbished HP Envy 13 | Intel i7 10th Gen | 13.3\" 4K | Win 11",
      image: "https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 31999,
      originalPrice: 114999,
      discount: 72,
      stock: 22,
      category: "new-arrivals"
    },
    {
      id: 12,
      name: "Refurbished MacBook Pro 13\" | Apple M1 | 8GB RAM | 256GB SSD | macOS",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      price: 64999,
      originalPrice: 119900,
      discount: 45,
      stock: 14,
      category: "new-arrivals"
    }
  ];
  
  const filteredProducts = products.filter(product => 
    product.category === activeCategory
  );

  const visibleProducts = filteredProducts.slice(currentIndex, currentIndex + 4);

  const handlePrevSlide = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, filteredProducts.length - 4) : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex(prev => 
      prev >= filteredProducts.length - 4 ? 0 : prev + 1
    );
  };

  const handleQuickView = (productId) => {
    console.log(`Quick view for product ${productId}`);
    // Implementation for showing product detail modal
  };

  const formatPrice = (price) => {
    return `₹ ${price.toLocaleString('en-IN')}`;
  };
  
  return (
    <section className="new-drops-section">
      <div className="new-drops-container">
        <div className="new-drops-sidebar">
          <div className="sidebar-content">
            <h2 className="sidebar-title">
              New Drops, Don't<br />Miss Them!
            </h2>
            <p className="sidebar-cta">
              Grab Yours Now!
            </p>
            
            <div className="category-tabs">
              <button 
                className={`category-tab ${activeCategory === 'best-sellers' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('best-sellers');
                  setCurrentIndex(0);
                }}
              >
                <span className="tab-indicator"></span>
                Best Sellers
              </button>
              
              <button 
                className={`category-tab ${activeCategory === 'new-arrivals' ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory('new-arrivals');
                  setCurrentIndex(0);
                }}
              >
                <span className="tab-indicator"></span>
                New Arrivals
              </button>
            </div>
          </div>
        </div>
        
        <div className="new-drops-slider">
          <button 
            className="slider-nav prev"
            onClick={handlePrevSlide}
            aria-label="Previous products"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          <div className="product-cards">
            {visibleProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="certification-badge">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA5NSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAuMjggMS4xOTZIMzEuMzQ4TDU5LjY1NiAxLjE5Nkw0OS44NCAwLjVDNDkuODQgMC41IDQ5Ljg0IDY5LjUzIDQ5Ljg0IDYzLjgzM0M0OS44NCA1OC4xMzcgNTkuNjU2IDQ4LjM0OSA1OS42NTYgNDguMzQ5TDMwLjE3MSA4NS43NDRMMzAuMTcgOTRMMC4yOCAxLjE5NloiIGZpbGw9IiMwMDgxYzEiLz48cGF0aCBkPSJNOS4xMDcgMzcuMDk3TDE1Ljc4OCAzNS4xOTNsMy41NTQtNi4yMjggMy41NTMgNi4yMjggNi42ODEgMS45MDQtNC44MDYgNS4yNzUgMC43NDkgNy4wOTktNi4xNzctMy4xMDQtNi4xNzcgMy4xMDQgMC43NS03LjA5OS00LjgwOC01LjI3NVoiIGZpbGw9IiNmZmYiLz48dGV4dCB4PSIxMCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiPlRSVVNUPC90ZXh0Pjwvc3ZnPg==" 
                    alt="Trust Badge" 
                  />
                </div>
                
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200';
                    }}
                  />
                </div>
                
                <div className="product-details">
                  <div className="product-stock">
                    <span className="stock-status">
                      In stock ({product.stock} units)
                    </span>
                  </div>
                  
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-price">
                    <div className="current-price">
                      {formatPrice(product.price)}
                    </div>
                    
                    <div className="price-details">
                      <span className="original-price">
                        {formatPrice(product.originalPrice)}
                      </span>
                      
                      <span className="discount-badge">
                        {product.discount}% Off
                      </span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="quick-view-button"
                  onClick={() => handleQuickView(product.id)}
                >
                  Quick view
                </button>
              </div>
            ))}
          </div>
          
          <button 
            className="slider-nav next"
            onClick={handleNextSlide}
            aria-label="Next products"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewDropsSlider; 