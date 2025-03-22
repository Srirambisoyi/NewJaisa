import React, { useState } from 'react';
import './Faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why Choose Refurbished Laptops?",
      answer: "Refurbished laptops offer exceptional value for money. They undergo thorough testing and restoration processes to ensure they work like new, but at a fraction of the cost of brand new devices. They're also an environmentally-friendly choice as they extend the lifecycle of electronic devices."
    },
    {
      question: "What are some benefits of buying a refurbished laptop from Newjaisa?",
      answer: "When buying from Newjaisa, you get quality-assured refurbished laptops with warranty coverage, significant cost savings compared to new models, eco-friendly tech consumption, professionally tested devices, and excellent customer support."
    },
    {
      question: "How do we know about the support and warranty services at Newjaisa?",
      answer: "Newjaisa offers comprehensive warranty and support services with all refurbished laptops. This includes technical assistance, repair services, and replacement policies. You can find detailed information about our warranty coverage on our product pages or by contacting our customer service team."
    },
    {
      question: "How do I Return or Cancel an Order?",
      answer: "To return or cancel an order, log into your account, go to your orders section, select the order you wish to return/cancel, and follow the guided process. You can also contact our customer support team directly for assistance with returns or cancellations."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">4 questions people always ask</h2>
        
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="toggle-btn">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="faq-more">
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
    </section>
  );
}

export default Faq; 