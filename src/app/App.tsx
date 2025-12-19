import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedModels } from './components/FeaturedModels';
import { Portfolio } from './components/Portfolio';
import { BrandStory } from './components/BrandStory';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Import model images
import yashviImage from '../assets/models/yashvi.jpg';
import sophiaImage from '../assets/models/sophia.jpg';
import elenaImage from '../assets/models/elena.jpg';
import amaraImage from '../assets/models/amara.jpg';

// Import portfolio images
import portfolio1 from '../assets/portfolio/portfolio1.jpg';
import portfolio2 from '../assets/portfolio/portfolio2.jpg';
import portfolio3 from '../assets/portfolio/portfolio3.jpg';
import portfolio4 from '../assets/portfolio/portfolio4.jpg';
import portfolio5 from '../assets/portfolio/portfolio5.jpg';
import portfolio6 from '../assets/portfolio/portfolio6.jpg';
import portfolio7 from '../assets/portfolio/portfolio7.jpg';
import portfolio8 from '../assets/portfolio/portfolio8.jpg';

// Import hero and brand story images
import heroImage from '../assets/hero/hero.jpg';
import brandStoryImage from '../assets/portfolio/portfolio8.jpg';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Featured Models Data
  const models = [
    {
      id: 1,
      name: 'YASHVI PANCHOLI',
      image: yashviImage,
    },
    {
      id: 2,
      name: 'Sophia Chen',
      image: sophiaImage,
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      image: elenaImage,
    },
    {
      id: 4,
      name: 'Amara Williams',
      image: amaraImage,
    },
  ];

  // Portfolio Items Data
  const portfolioItems = [
    {
      id: 1,
      image: portfolio1,
      category: 'Weddings',
      title: 'Eternal Elegance',
    },
    {
      id: 2,
      image: portfolio2,
      category: 'Weddings',
      title: 'Garden Romance',
    },
    {
      id: 3,
      image: portfolio3,
      category: 'Fashion',
      title: 'Haute Couture',
    },
    {
      id: 4,
      image: portfolio4,
      category: 'Fashion',
      title: 'Runway Moments',
    },
    {
      id: 5,
      image: portfolio5,
      category: 'Events',
      title: 'Grand Gala',
    },
    {
      id: 6,
      image: portfolio6,
      category: 'Events',
      title: 'Corporate Excellence',
    },
    {
      id: 7,
      image: portfolio7,
      category: 'Behind the Scenes',
      title: 'Creative Process',
    },
    {
      id: 8,
      image: portfolio8,
      category: 'Fashion',
      title: 'Editorial Vision',
    },
  ];

  return (
    <div className="bg-white">
      <Navigation />
      <Hero backgroundImage={heroImage} />
      <FeaturedModels models={models} />
      <Portfolio items={portfolioItems} />
      <BrandStory image={brandStoryImage} />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;