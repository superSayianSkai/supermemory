import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContextSection from './components/ContextSection';
import Carousel from './components/Carousels';
import SolutionSection from './components/SolutionSection';
import FeatureSection from './components/FeatureSection';
import BuildTheMemoryLayer from './components/BuildTheMemoryLayer';
import FeaturesFeatures from './components/FeaturesFeatures';
import ProductContext from './components/ProductContext';
import Trusted from './components/Trusted';
import Footer from './components/Footer';
function App() {  
  return (
    <div className=" min-h-screen text-white font-sans overflow-x-hidden overflow-y-hidden">
      <div className=' max-w-8xl pt-[80px] bg-[#1c2026] flex flex-col items-center justify-center md:px-4'>
        <Navbar />
        <HeroSection />
        <ContextSection />
        <Carousel />
        <SolutionSection />
        <FeatureSection />
      </div>
      <div className='max-w-8xl bg-[#1c2026] max-w-8xl  '>
        <BuildTheMemoryLayer />
        <FeaturesFeatures />
        <ProductContext />
        <Trusted />
        <Footer />
      </div>
    </div>


  );
}

export default App;