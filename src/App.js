
import './App.css';
import Header from './MyComponents/Pages/Header';
import Banner from './MyComponents/Pages/Banner';
import About from './MyComponents/Pages/About';
import ResearchSection from './MyComponents/Pages/ResearchSection';
import Usp from './MyComponents/Pages/Usp';
import Blog from './MyComponents/Pages/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <ResearchSection />
      <Usp />
      <Blog />
    </div>
  );
}

export default App;
