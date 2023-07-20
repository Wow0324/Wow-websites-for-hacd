import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// import './App.css';
import Home from './app/home/page';
import Hacd from './app/hacd/page';
import Bidding from './app/bidding/page';
import NavBar from './components/layouts/NavBar';

function App() {
  const currentYear = new Date().getFullYear();
  return (
    <Router>
      <div>
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

        <div>
          {/* Add a padding top to the content to prevent it from being overlapped by the fixed navigation */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hacd" element={<Hacd />} />
            <Route path="/bidding" element={<Bidding />} />
          </Routes>
        </div>

        <div className='bg-back-footer py-5'>
          <h1 className='text-white text-1xl text-center'>© Copyright {currentYear} hacpool.com - All Rights Reserved</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
