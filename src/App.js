import React, { Component } from 'react';
import NavigationMenu from './components/NavigationMenu';
import CarouselPage from './components/CarouselPage';
import ServicesPage from './components/ServicesPage';
import GalleryPage from './components/GalleryPage'
import TeamPage from './components/TeamPage'
import ReviewsPage from './components/ReviewsPage';
import ContactPage from './components/ContactPage';
import FooterPage from './components/FooterPage'

class App extends Component {
  render() {
    return (
      
      <div>
        <NavigationMenu />
        <CarouselPage />
        <ServicesPage /> 
        <GalleryPage />      
        <TeamPage />
        <ReviewsPage />
        <ContactPage />
        <FooterPage />
      </div>
      
    );
  }
}

export default App;