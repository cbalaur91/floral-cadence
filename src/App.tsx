import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ColorPalette from './pages/ColorPalette';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function App() {
  // Simple client-side routing
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleNavigation);

    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/services':
        return <Services />;
      case '/gallery':
        return <Gallery />;
      case '/colors':
        return <ColorPalette />;
      case '/pricing':
        return <Pricing />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
