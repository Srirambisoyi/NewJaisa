import React from 'react';
import './App.css';
import Navbar from './navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import CategoryShowcase from './components/CategoryShowcase';
import PromotionalBanner from './components/PromotionalBanner';
import NewDropsSlider from './components/NewDropsSlider';
import ProductSlider from './components/ProductSlider';
import Footer from './Footer';
import BlogPostSlider from './components/BlogPostSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SecondaryNavbar />
      <main>
        <PromotionalBanner />
        <CategoryShowcase />
        <NewDropsSlider />
        <BlogPostSlider />
        <ProductSlider />
      </main>
      <Footer />
    </div>
  );
}

export default App;
