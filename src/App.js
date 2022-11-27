
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Features from './components/Features/Features';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="bg-base-200">

      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
