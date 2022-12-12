import React from 'react'
import "./footer.css"
// style={{position:"absolute", top:props.top}}

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-first'>
                <h2 className='footer-head'>Services Offered</h2>
                <div className='for-margin'>
                    <div className='foot-fir1'>
                        <dl> 
                            <dt>Digital Marketing</dt>
                            <dt>SEO Audit</dt> 
                            <dt>SEO Services</dt>
                            <dt>PPC Services</dt>
                            <dt>Email Marketing</dt>
                            <dt>Web Development</dt>
                            <dt>Search Engine Marketing</dt>
                            <dt>Social Media Optimization</dt>
                            <dt>Social Media Marketing</dt>
                            <dt>Content Marketing Services</dt>
                        </dl>
                    </div>
                    <div className='foot-fir2'>
                        <dl>
                            <dt>Copywriting</dt>
                            <dt>UI/UX design</dt>
                            <dt>Local SEO Services</dt>
                            <dt>Technical SEO Services</dt>
                            <dt>WordPress SEO Services</dt>
                            <dt>YouTube SEO Services</dt>
                            <dt>WordPress Development</dt>
                            <dt>Google Ads Services</dt>
                            <dt>Facebook Ads Services</dt>
                            <dt>YouTube Marketing Services</dt>
                        </dl>
                    </div>
                </div>
            </div>
            <div className='footer-second'>
                <div className='footer-sec-1'>
                    <h2 className='footer-head-t'>Resource</h2>
                    <dl>
                        <dt>Case Studies</dt>
                        <dt>Consulting Services</dt>
                        <dt>Testimonials</dt>
                        <dt>FAQ</dt>
                        <dt>Blogs</dt>
                    </dl>
                </div>
                <div className='footer-sec-2'>
                    <h2 className='footer-head-t'>Company</h2>
                    <dl>
                        <dt>About Us</dt>
                        <dt>Portfolio</dt>
                        <dt>Partner With Us</dt>
                        <dt>Career</dt>
                        <dt>Contact Us</dt>
                    </dl>
                </div>
                <div className='footer-sec-3'>
                    <h2 className='footer-head-t'>Contact</h2>
                    <dl>
                        <dt>Jamia Nagar, Okhla<br />South Delhi, Delhi<br />Pin-110025</dt>
                        <dt>+91 98712 32887</dt>
                        <dt>info@ImproveDigitally.com</dt>
                    </dl>
                </div>
            <div  className='subscribe'>
                <h2>Subscribe to out email letter</h2>
                <input style={{outline: "none", padding: "10px"}} className='email' placeholder='Your Email'></input><button className='check-now'>Subscribe</button>
            </div>
            </div>
        <footer style={{display:"flex", justifyContent: 'center',color: "white"}}>Copyright © 2022 Improve Digitally<br />Privacy Policy  |  Terms of Service  |  FAQ</footer>
        </div>
    )
}
