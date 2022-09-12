import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Nav from './components/Nav/';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
