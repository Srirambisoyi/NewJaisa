import React from 'react';
import './RatingDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function RatingDisplay() {
  return (
    <div className="rating-container">
      <div className="stars">
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStarHalfAlt} className="star" />
      </div>
      <div className="rating-text">
        <span className="rating-score">4.5/5</span>
        <span className="rating-separator">|</span>
        <span className="review-count">103 Reviews</span>
      </div>
    </div>
  );
}

export default RatingDisplay; 