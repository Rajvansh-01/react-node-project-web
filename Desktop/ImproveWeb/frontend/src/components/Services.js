import React from 'react';
import service1 from "../images/service1.jpg";
import service2 from '../images/service2.jpg';
import service3 from '../images/service3.jpg';
import service4 from '../images/service4.jpg';
import service5 from '../images/service5.jpg';
import service6 from '../images/service6.jpg';

export default function Services() {
  return (
    <div className='services'>
        <div className='div-h'>
            <p className='heading1'>Increase organic <span className='color-fill'>website traffic</span><br /> and enhance your business web presence</p>
        </div>
        <div className='div-g'>
            <div class="grid-container-services">
                <div className='inc-desc'>
                    
                    <div>
                        <img className='service1' src={service1} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='ser-desc'>
                    <div>
                        <img className='service1' src={service2} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='inc-desc'>
                    <div>
                        <img className='service1' src={service3} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='inc-desc'>
                    <div>
                        <img className='service1' src={service4} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='inc-desc'>
                    <div>
                        <img className='service1' src={service5} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
                <div className='inc-desc'>
                    <div>
                        <img className='service1' src={service6} alt="service1"></img>
                    </div>
                    <div>
                        <h2 className='service-head'>SEO Services</h2>
                    </div>
                    <div>
                       <p> We have a team of expert SEO that conducts remarkably successful SEO campaigns in highly competitive sectors using our 
                        unique and best practices of blend technical and creative expertise in SEO.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
