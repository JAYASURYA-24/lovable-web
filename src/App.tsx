import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Story from './components/Story';
import Quotes from './components/Quotes';
import Memories from './components/Memories';
import MomentGallery from './components/MomentGallery';
import Bonding from './components/Bonding';
import LoveReasons from './components/LoveReasons';
import Footer from './components/Footer';
import Particles from './components/Particles';
import FloatingHearts from './components/FloatingHearts';
import './styles/app.css';

/**
 * Main App Component
 * Single-page website telling the love story of two souls
 */
function App() {
  return (
    <div className="app">
      <Particles />
      <FloatingHearts />
      <Hero />
      <Quotes />
      <Intro />
      <Story />
      <Memories />
      <LoveReasons />
      <MomentGallery />
      <Bonding />
      <Footer />
    </div>
  );
}

export default App;
