import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Divisions from './sections/Divisions';
import Products from './sections/Products';
import Mission from './sections/Mission';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-indigo-500/30">
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <Products />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;