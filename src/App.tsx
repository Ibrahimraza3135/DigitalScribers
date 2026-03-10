import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Why from './pages/Why';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: 'DigitalScribers - Professional Wikipedia Pages',
      services: 'Our Services - DigitalScribers',
      why: 'Why Hire Experts - DigitalScribers',
      faq: 'FAQ - DigitalScribers',
      about: 'About Us - DigitalScribers',
      contact: 'Contact - DigitalScribers',
    };
    document.title = titleMap[currentPage] || 'DigitalScribers';
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'why':
        return <Why onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQ onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
