// import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Navbar from './component/navbar';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import About from './component/about';
import Contact from './component/contact';

// import "./styles.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
    </>
  )
}

export default App;
