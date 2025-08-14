
import './App.css';
import Header from './MyComponents/Pages/Header';
import Banner from './MyComponents/Pages/Banner';
import About from './MyComponents/Pages/About';
import ResearchSection from './MyComponents/Pages/ResearchSection';
import Usp from './MyComponents/Pages/Usp';
import Blog from './MyComponents/Pages/Blog';
import Pricing from './MyComponents/Pages/Pricing';
import Footer from './MyComponents/Pages/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <ResearchSection />
      <Usp />
      <Blog />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
