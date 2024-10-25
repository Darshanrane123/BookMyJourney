
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from "./footer/Footer";
// import HomeContainer from './pages/home_container/HomeContainer';
import HomeContainer from '../pages/home_container/HomeContainer';
import Bus from '../pages/bus/Bus';
// import BusDetails from './pages/bus/BusDetails';  // Import BusDetails component
import Details from '../pages/bus/Detail';
import Checkout from '../pages/checkout/Checkout';
import Search from '../pages/search/Search';
import Results from '../pages/result/Result';

const BusBooking=()=> {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path='/' element={<HomeContainer/>} />
            <Route path="/bus" element={<Bus/>} />
            {/* <Route path="/bus/:id" element={<BusDetails />} />  Dynamic route for bus details */}
            <Route path="/bus/1" element={<Details/>} />
            <Route path="/bus/1/checkout" element={<Checkout/>} />
            <Route path="/bus/2" element={<Details/>} />
            <Route path="/bus/2/checkout" element={<Checkout/>} />
            <Route path="/bus/3" element={<Details/>} />
            <Route path="/bus/3/checkout" element={<Checkout/>} />
            <Route path="/bus/4" element={<Details/>} />
            <Route path="/bus/4/checkout" element={<Checkout/>} />
            <Route path="/bus/5" element={<Details/>} />
            <Route path="/bus/5/checkout" element={<Checkout/>} />
            <Route path="/bus/6" element={<Details/>} />
            <Route path="/bus/6/checkout" element={<Checkout/>} />
            <Route path="/" element={<Search />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default BusBooking;