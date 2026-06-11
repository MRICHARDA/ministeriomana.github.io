import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StartSection from './components/StartSection';
import FeaturesChess from './components/FeaturesChess';
import FeaturesGrid from './components/FeaturesGrid';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Academia from './components/Academia';
import PhotoGallery from './components/PhotoGallery';
import CtaFooter from './components/CtaFooter';

function App() {
  return (
    <div className="bg-background min-h-screen">
      <div className="z-10 relative">
        <Navbar />
        <div id="inicio"><Hero /></div>
        <div className="bg-background relative z-10">
          <div id="quienes-somos"><StartSection /></div>
          <div id="servicios"><FeaturesChess /></div>
          <div id="estructura"><FeaturesGrid /></div>
          <div id="academia"><Academia /></div>
          <div id="portafolio"><PhotoGallery /></div>
          <Stats />
          <div id="equipo-pastoral"><Testimonials /></div>
          <div id="contactanos"><CtaFooter /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
