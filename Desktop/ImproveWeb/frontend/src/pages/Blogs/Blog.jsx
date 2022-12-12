import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Cases from '../../components/Casestudy/Cases';
import Fifa from "../../images/fifa.jpg";
import Journalism from "../../images/journalism.jpg";
import Dmarket from "../../images/dmarket.jpg";
import "./blogs.css";
import "../../App.css";

export default function Blog() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/blogs');
        const items = await data.json();
        setItems(items);
    };

    return (
        <div>
            <Navbar />
            <section className='blog-section'>
                {
                    items.map(item => (
                        <div className='single-blog'>
                            <Cases img={Fifa} p1={item.topic} p2={item.detail} />
                            <Cases img={Journalism} p1={item.topic} p2={item.detail} />
                            <Cases img={Dmarket} p1={item.topic} p2={item.detail} />
                        </div>
                    ))
                }
            </section>
            <Footer />
        </div>
    )
}