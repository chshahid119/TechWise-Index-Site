import './App.css';
import React from 'react';
import Home from './Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Routes,Route } from 'react-router-dom';
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer';


function App() {
  
  return (
    <>
       <>
        <Navbar/>
       <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route  exact path='/about' element={<About/>}/>
        <Route  exact path='/services' element={<Service/>}/>
        <Route  exact path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Home/>}/>
       
       </Routes>
       <Footer/>
       
       
       </>
    </>
  );
}

export default App;
