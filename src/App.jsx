import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchComponenet from "./components/FetchComponent"
import Counter from './components/Counter';
import Infinitescroll from './components/Infinitescroll';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ContactUs from './components/ContactUs';
import RegistrationFrom from './components/RegistrationFrom';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/counter" element={<Counter />} />
        <Route path="/fetch-component" element={<FetchComponenet />} />
        <Route path='/infinite-scroll' element={<Infinitescroll/>} />
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/registration-form' element={<RegistrationFrom/>} />
      </Routes>
    </Router>
  );
};

export default App;

