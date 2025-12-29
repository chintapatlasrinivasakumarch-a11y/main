import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DrownListing from './pages/DrownListing';
import DrownDetails from './pages/DrownDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Contact from './pages/Contact';
import Compare from './pages/Compare';
import Dashboard from './pages/Dashboard';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<DrownListing />} />
            <Route path="/drown/:id" element={<DrownDetails />} />
            <Route path="/book/:id" element={<Booking />} />
            <Route path="/payment/:id" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
