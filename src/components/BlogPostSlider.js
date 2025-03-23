import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './BlogPostSlider.css';

const BlogPostSlider = () => {
  const [activeTab, setActiveTab] = useState('macbook');
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'macbook', name: 'MacBook' },
    { id: 'laptop', name: 'Laptop' },
    { id: 'desktop', name: 'Desktop' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "Refurbished Laptops for Students: The Perfect Blend of Affordability and Functionality",
      slug: "refurbished-laptops-for-students",
      excerpt: "When it comes to purchasing a laptop for school, students often face a dilemma...",
      category: "Social Media",
      date: "January 27, 2025",
      image: "https://img.freepik.com/free-vector/isometric-education-illustration_1284-61115.jpg",
      cardTitle: "Refurbished Laptops for Students - Affordable and Functional"
    },
    {
      id: 2,
      title: "Tech Trends 2025: Why Refurbished Electronics Are the Future",
      slug: "tech-trends-2025-refurbished-electronics",
      excerpt: "The world of technology is changing fast, and 2025 will bring even more exciting...",
      category: "Social Media",
      date: "January 26, 2025",
      image: "https://img.freepik.com/free-vector/factory-workers-repairing-assembly-line_74855-11336.jpg",
      cardTitle: "Why Refurbished Electronics Are the Future"
    },
    {
      id: 3,
      title: "What to Check Before Purchasing a Refurbished MacBook?",
      slug: "what-to-check-before-purchasing-refurbished-macbook",
      excerpt: "Refurbished MacBooks are a great way to get premium Apple devices at a fraction...",
      category: "Social Media",
      date: "January 25, 2025",
      image: "https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg",
      cardTitle: "What to Check Before Purchasing a Refurbished MacBook"
    },
    {
      id: 4,
      title: "Are Latest-Gen Laptops Always Worth the Splurge? A Look at the 12th Gen vs. 8th Gen",
      slug: "latest-gen-laptops-worth-the-splurge",
      excerpt: "When buying a laptop, it's tempting to gravitate toward the latest models like...",
      category: "NewJaisa",
      date: "November 30, 2024",
      image: "https://cdn.mos.cms.futurecdn.net/ixVX9tgzZpyybQQNUGxaZ8.jpg",
      cardTitle: "Is newer always better?"
    }
  ];
  
  // Use placeholder images in case the actual images are not available
  const placeholderImages = [
    "https://via.placeholder.com/150?text=Students+Laptop",
    "https://via.placeholder.com/150?text=Electronics+Future",
    "https://via.placeholder.com/150?text=MacBook+Check",
    "https://via.placeholder.com/150?text=12thGen+vs+8thGen"
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="blog-post-slider-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="eco-text">Eco</span> Tips & <span className="tech-text">Tech</span> Talks
        </h2>
        <div className="section-divider">
          <div className="eco-divider"></div>
          <div className="tech-divider"></div>
        </div>
      </div>

      <div className="blog-categories-tabs">
        {categories.map(category => (
          <div 
            key={category.id}
            className={`blog-category-tab ${activeTab === category.id ? 'active' : ''}`}
            onClick={() => handleTabChange(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>

      <div className="blog-post-slider">
        <div className="slider-container">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-content">
                <div className="blog-card-top">
                  <div className="blog-card-title">
                    {post.cardTitle}
                  </div>
                  <div className="blog-card-image-wrapper">
                    <div className="blog-card-image-circle">
                      {post.id === 4 ? (
                        <div className="cpu-comparison">
                          <div className="cpu-item cpu-12gen">
                            <span className="gen-label">12th Gen</span>
                          </div>
                          <div className="vs-label">VS</div>
                          <div className="cpu-item cpu-8gen">
                            <span className="gen-label">8th Gen</span>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={post.image || placeholderImages[index]} 
                          alt={post.title}
                          className="blog-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = placeholderImages[index];
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="blog-card-date">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {post.date}
                  </div>
                  {post.id === 4 && (
                    <div className="read-more-overlay">
                      <span className="read-more-text">Read More</span>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="arrow-icon" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="blog-card-footer">
                <div className="blog-card-category">{post.category}</div>
                <h3 className="blog-card-heading">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="slider-navigation">
          <button className="slider-arrow prev">
            <FontAwesomeIcon icon={faArrowRight} className="left" />
          </button>
          <button className="slider-arrow next">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostSlider; 