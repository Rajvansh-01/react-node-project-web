import React from 'react';
import Navbar from '../Navbar/Navbar';
import Office from '../../images/office.jpg'
import Footer from "../Footer/Footer"
import "./contact.css"

export default function Contact() {
    return (
 
        <div className='contains'>

            <div className='contact-blur'>
                <p className='contact-head-ing'>Contact</p>
            </div>
            <div className='whole'>
                <div className='combined'>
                    <div className='Bio'>
                        <p className='heading-contact'>We can't wait to <span className='color-fill'>hear from<br />you!</span></p>
                        <p className='para-contact'>At Improve Digitally, we are always ready for new collaborations and opportunities. Our response team is available 24*7 to answer all your digital marketing and related queries. Get in touch with us as we would be more than happy to help you!!</p>
                    </div>
                    <div>
                        <p className='heading-con'>Contact</p>
                        <dl>
                            <dt>Jamia Nagar, Okhla, New Delhi, Delhi 110025</dt>
                            <dt>+91 98712 32887</dt>
                            <dt>info@improvedigitally.com</dt>
                        </dl>
                    </div>
                </div>
                <div className='form'>
                    <p className='heading'>Get in <br /><span className='color-fill'>Touch!</span></p>
                    <input className='main-input' type="text" id="fname" name="firstname" placeholder="Mail Adress*"></input>
                    <input className='main-input' type="text" id="fname" name="firstname" placeholder="yoursite.com*"></input><br />
                    <input className='main-input' type="Number" id="fname" name="firstname" placeholder="Mail Adress*"></input>
                    <input className='main-input' type="text" id="fname" name="firstname" placeholder="yoursite.com*"></input><br />
                    <input className='main-input' type="text" id="fname" name="firstname" placeholder="Mail Adress*"></input>
                    <input className='main-input' type="text" id="fname" name="firstname" placeholder="Mail Adress*"></input>
                    <button className='check-now'>Submit</button>
                </div>
            </div>
            <div className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5130296544276!2d77.29255801508086!3d28.554353382448703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce40ef6aaaaab%3A0x4c56f7211b4d4950!2sImprove%20Digitally!5e0!3m2!1sen!2sjp!4v1670699768700!5m2!1sen!2sjp" width="600" height="450" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    )
}
