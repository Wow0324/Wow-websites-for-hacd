import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import './App.css';
import Home from './app/home/page';
import Home2 from './app/home2/page';
import Hacd from './app/hacd/page';
import Bidding from './app/bidding/page';
import NavBar from './components/layouts/NavBar';
import Gpu from './app/gpu/page';
import Diamonds from './app/diamond/page';
import DiamondsByAddress from './app/address/page';
import AutoBidding from './app/autobidding/page';
import DiamondsByKeywords from './app/kewwords/page';
import Pool888 from './app/wowpool888/page';
import Pool50K from './app/wowpool50k/page';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>

        <NavBar />

        <div className='flex-1 bg-black'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/wow_pool" element={<Home2 />} /> */}
            {/* <Route path="/wow_pool888" element={<Pool888 />} /> */}
            <Route path="/hacd" element={<Hacd />} />
            {/* <Route path="/wow_pool50k" element={<Pool50K />} /> */}
            <Route path="/bidding" element={<Bidding />} />
            <Route path="/autobidding" element={<AutoBidding />} />
            <Route path='/report' element={<Diamonds />} />
            <Route path='/address' element={<DiamondsByAddress />} />
            {/* <Route path="/gpu" element={<Gpu />} /> */}
            {/* <Route path="/keywords" element={<DiamondsByKeywords />} /> */}
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
