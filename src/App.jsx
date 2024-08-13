import React from 'react';
import Header from './components/Header';
import HeroSection from './components/herosection';
import ClientsSection from './components/ClientsSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';

import Body7 from './components/body';
import TestimonialsSection1 from './components/TestimonalsSection1';
import TestimonialsSection2 from './components/TestimonalsSection2';
import BlogSection from './components/BlogSection';
import TenthPage from './components/TenthPage';
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Body7/>
      <TestimonialsSection1/>
      <TestimonialsSection2/>
      <BlogSection/>
      <TenthPage/>
      <Footer/>
    </>
  );
};

export default App;
