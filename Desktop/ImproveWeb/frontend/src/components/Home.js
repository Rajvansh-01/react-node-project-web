// import React from 'react'; 
// import Navbar from './Navbar';
// import MainTop from './MainTop';
// import Expand from './Expand';
// import Enhance from './Enhance';
// import Services from './Services';
// import Casestudy from './Casestudy';
// import Experience from './Experience';
// import Media from './Media';
// import Interested from './Interested';
// import Footer from './Footer';
import React from 'react'; 
import Navbar from './Navbar/Navbar';
import MainTop from './MainTop/Maintop';
import Expand from './Expand/Expand';
import Enhance from './Enhance/Enhance';
import Services from './Services/Services';
import Casestudy from './Casestudy/Casestudy';
import Experience from './Experience/Experience';
import Media from './Media/Media';
import Interested from './Interested/Interested';
import Footer from './Footer/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <MainTop />
            <Expand />
            <Enhance />
            <Services />
            <Casestudy />
            <Experience />
            <Media />
            <Interested />
            <Footer />
        </div>
    )
}
