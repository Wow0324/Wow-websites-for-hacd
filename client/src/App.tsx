import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import './App.css';
import Home from './app/home/page';
import Hacd from './app/hacd/page';
import Bidding from './app/bidding/page';
import NavBar from './components/layouts/NavBar';
import Gpu from './app/gpu/page';
import Diamonds from './app/diamond/page';
import DiamondsByAddress from './app/address/page';
import AutoBidding from './app/autobidding/page';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        {/* <nav className="py-2 top-0 sticky bg-white z-10">
          <div className='container mx-auto'>
            <ul className="flex flex-row items-center justify-between">
              <li>
                <Link to="/" className="flex flex-row font-bold text-secondary text-2xl hover:text-nav-hover items-center">
                  <img src={require("./assets/images/logo-white-121x121.jpg")} className='h-[60px] w-[60px] mr-1' />
                  Welcome To WOWPOOL
                </Link>
              </li>
              <li className='ml-auto'>
                <Link to="/hacd" className="text-secondary font-bold hover:text-nav-hover">$HACD Diamonds</Link>
              </li>
              <li className='ml-10'>
                <Link to="/bidding" className="text-secondary font-bold hover:text-nav-hover">$HACD Bidding</Link>
              </li>
              <li className='ml-10'>
                <Link to="https://sea.hacash.diamonds" target="_blank" className="text-secondary font-bold hover:text-nav-hover">$HACD Exchange</Link>
              </li>
            </ul>
          </div>
        </nav> */}
        <NavBar/>

        <div className='flex-1 bg-black'>
          {/* Add a padding top to the content to prevent it from being overlapped by the fixed navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hacd" element={<Hacd />} />
            <Route path="/autobidding" element={<AutoBidding />} />
            <Route path="/bidding" element={<Bidding />} />
            <Route path='/report' element={<Diamonds/>} />
            <Route path='/address' element={<DiamondsByAddress/>} />
            <Route path="/gpu" element={<Gpu />} />
          </Routes>
        </div>

        <div className='bg-back-footer py-2 sm:py-5 bottom-0 z-10'>
          <h1 className='text-white text-sm sm:text-[18px] text-center'>© Copyright {currentYear} hacpool.com - All Rights Reserved</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
