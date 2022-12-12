import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Component, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../images/logo.jpg";
import Phone from "../../images/phone.jpg";
import Home from '../../pages/Home/Home'
import Contact from '../../pages/Contact/Contacts'
import "./navbar.css";

export default function Navbar() { 
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <div>
            <nav className="navigation">
                <a href="/" className="brand-name">
                <img src={Logo} alt="logo" className="logo" />
                </a>
                <button className="hamburger" 
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}
                >
                    <ul>
                        <li>
                            <Link to={'/'} className='fields'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/blogs'} className='fields'>Blogs</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className='fields'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='left'>
                    {/* <div>
                        <img alt="hello" className='phone' src={Phone} />
                    </div> */}
                    <div className='left'>
                    <div className='phone-number'>
                    <img alt="hello" className='phone' src={Phone} />
                        <span className='phone-dial'>+91 98778 98726</span>
                    </div>
                        {/* <Button variant="contained" className="btn" color="success">
                        Get A Proposal
                        </Button> */}
                        {/* <button className='btn'>
                        Get A Proposal
                        </button> */}
                        <button className='check-now upper-button' style={{padding:"10px 20px"}}>Get Started</button>
                    </div>
                </div>
            </nav>
            <Routes>
              <Route exact path='/' component={Home} />
              {/* <Route path='/blogs' component={Blogs} />*/}
              <Route path='/contact' component={<Contact />} /> 
          </Routes>
        </div>
    );
}
