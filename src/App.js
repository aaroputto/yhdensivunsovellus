import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Footer from './pages/Footer';
import { Routes, Route } from 'react-router-dom';



function App() {
return (
  <>
    <Navbar />
    <Header />
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      <Footer />
    </>
);
}

export default App;
