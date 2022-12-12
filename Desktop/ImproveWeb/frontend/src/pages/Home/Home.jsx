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
import Navbar from '../../components/Navbar/Navbar';
import MainTop from '../../components/MainTop/Maintop';
import Expand from '../../components/Expand/Expand';
import Enhance from '../../components/Enhance/Enhance';
import Services from '../../components/Services/Services';
import Casestudy from '../../components/Casestudy/Casestudy';
import Experience from '../../components/Experience/Experience';
import Media from '../../components/Media/Media';
import Interested from '../../components/Interested/Interested';
import Footer from '../../components/Footer/Footer';

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
