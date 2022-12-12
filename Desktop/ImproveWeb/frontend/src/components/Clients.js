import React from 'react';
import Client from "../images/clients.jpg";

export default function Clients() {
    return (
        <div className='client-div'>
            <p><span className='color-fill media-p'>Client’s love</span></p>
            <div className='div-h'>
                <p className='media-study-head'>Love from <span className='color-fill'>Clients</span></p>
            </div>
            <div className='client-container'>
                <div className='client-first'>
                    <img className='EnhanceImg' src={Client} alt="EnhanceImg"></img>
                </div>
                <div className='client-second'>
                    <p><span className='color-fill'>Organic Search Growth</span></p>
                    <p className='heading'>Enhance your<br /><span className='color-fill'>Organic Search</span><br />Visibility!</p>
                    <button className='check-now'>Get Started</button>
                    <img className='VideoButton' src={VideoButton} alt="VideoButton"></img>
                </div>
            </div>
        </div>
    )
}
