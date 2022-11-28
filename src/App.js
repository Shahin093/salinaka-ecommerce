
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import FeatureProduct from './components/FeatureProduct/FeatureProduct';
import RecomandredProduct from './components/RecomandredProduct/RecomandredProduct';
import { useState } from 'react';
import SideSlider from './components/Side-slider/SideSlider';

function App() {
  const [demo, setDemo] = useState(0)
  return (
    <div className="bg-base-20 ">

      <Navbar demo={demo} setDemo={setDemo}></Navbar>
      <div className=''>
        {
          demo && <SideSlider setDemo={setDemo}></SideSlider>
        }
      </div>
      <Routes className=''>
        <Route path="/" element={<HomePage demo={demo} setDemo={setDemo}></HomePage>} />
        <Route path="/features" element={<FeatureProduct />} />
        <Route path='/recomandred' element={<RecomandredProduct />}></Route>
      </Routes>

    </div>
  );
}

export default App;
