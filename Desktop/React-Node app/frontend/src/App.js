import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contacts';
import Blogs from './pages/Blogs/Blog';
import "./App.css"

function App() {
  return (
    <div className='page'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );

}



export default App;


// .................
