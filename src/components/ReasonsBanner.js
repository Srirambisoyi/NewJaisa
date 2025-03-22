import React from 'react';
import './ReasonsBanner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShield, 
  faCircleCheck, 
  faCalendarDay, 
  faAward, 
  faGaugeHigh,
  faMoneyBillTransfer,
  faLock
} from '@fortawesome/free-solid-svg-icons';

function ReasonsBanner() {
  return (
    <section className="reasons-section">
      <div className="reasons-container">
        <h2 className="reasons-title">
          6 Reasons NewJaisa is the Move You <span className="highlight">Need</span>
        </h2>
        
        <div className="reasons-banner">
          <div className="trust-badge">
            <div className="trust-logo">
              <FontAwesomeIcon icon={faShield} />
              <span>TRUST</span>
            </div>
          </div>
          
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <p>100% Scratchless Guarantee</p>
            </div>
            
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faCalendarDay} />
              </div>
              <p>14 Days Return</p>
            </div>
            
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <p>Free 1 Year Warranty</p>
            </div>
            
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faGaugeHigh} />
              </div>
              <p>Performance Guarantee</p>
            </div>
            
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
              </div>
              <p>Lifetime Buyback Guarantee</p>
            </div>
            
            <div className="reason-item">
              <div className="reason-icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <p>Free QuickHeal Total Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReasonsBanner; 