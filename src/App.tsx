import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './home';
import Footer from './footer';
import Service from './service';
import About from './about';
import Contact from './contact';
import Career from './career';
const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />        {/* Home Page */}
        <Route path="/home" element={<Home />} /> {/* Services Page */}
        <Route path="/service" element={<Service />} /> {/* Services Page */}
        <Route path="/about" element={<About />} /> {/* Services Page */}
        
        <Route path="/career" element={<Career />} /> {/* Services Page */}
        <Route path="/contact" element={<Contact />} /> {/* Services Page */}
        {/* You can add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
