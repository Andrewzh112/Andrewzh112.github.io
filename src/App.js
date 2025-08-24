import React, { useState, useEffect, createContext } from "react";
import './App.css';
import Header from './components//Header/Header';
import Container from './components//Container/Container';
import Footer from './components/Footer/Footer';
import ScrollButton from './components/ScrollButton/ScrollButton';
import { keepTheme } from './Util/themes';
import Toggle from './components/Toggle/Toggle';
import CustomCursor from './components/CustomCursor/CustomCursor';
import LoadingAnimation from './components/LoadingAnimation/LoadingAnimation';
import VisitorCounter from './components/VisitorCounter/VisitorCounter';

// Create context for page transitions
export const PageTransitionContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    keepTheme();

    // Add scroll listener to track current section
    const handleScroll = () => {
      const sections = ['landing', 'about', 'news', 'featured-publications', 'publications', 'academic-talks', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (currentSection !== sections[i]) {
            setCurrentSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <PageTransitionContext.Provider value={{
      currentSection,
      setCurrentSection,
      isTransitioning,
      setIsTransitioning
    }}>
      <div className="wrapper">
        <div className="content">
          <Toggle />
          <Header />
          <Container />
          <VisitorCounter />
          <Footer />
          <ScrollButton />
        </div>
        <CustomCursor />
      </div>
    </PageTransitionContext.Provider>
  );
}

export default App;
