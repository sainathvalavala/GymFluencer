import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;