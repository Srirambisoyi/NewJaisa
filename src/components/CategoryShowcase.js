import React from 'react';
import './CategoryShowcase.css';

function CategoryShowcase() {
  const categories = [
    {
      name: 'Laptops',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDh8fGxhcHRvcHxlbnwwfHx8fDE3MTY2MzA4NjZ8MA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'Laptop'
    },
    {
      name: 'Desktops',
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHx8fDE3MTY2MzA5NjR8MA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'Desktop'
    },
    {
      name: 'Mini PC',
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fG1pbmklMjBwY3xlbnwwfHx8fDE3MTY2MzA5OTB8MA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'Mini PC'
    },
    {
      name: 'ChromeBook',
      image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGNocm9tZWJvb2t8ZW58MHx8fHwxNzE2NjMxMDI1fDA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'Chromebook'
    },
    {
      name: 'All in One',
      image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDJ8fGFsbCUyMGluJTIwb25lJTIwY29tcHV0ZXJ8ZW58MHx8fHwxNzE2NjMxMDQ5fDA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'All in One PC'
    },
    {
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fGNvbXB1dGVyJTIwbW91c2V8ZW58MHx8fHwxNzE2NjMxMDY2fDA&ixlib=rb-4.0.3&q=80&w=200',
      alt: 'Computer Accessories'
    }
  ];

  return (
    <section className="category-section">
      <div className="category-container">
        <h2 className="category-title">
          Explore <span className="highlight">Refurbished</span> Tech
        </h2>
        
        <div className="category-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="category-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase; 