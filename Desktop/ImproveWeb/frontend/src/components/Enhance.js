import React from 'react';
import EnhanceImg from "../images/enhance.jpg";
import VideoButton from "../images/video.jpg";

function Enhance() {
  return (
    <div className='enhance-container'>
      <div className='div-fir'>
        <p><span className='color-fill'>Organic Search Growth</span></p>
        <p className='heading'>Enhance your<br /><span className='color-fill'>Organic Search</span><br />Visibility!</p>
        <button className='check-now'>Get Started</button>
        <img className='VideoButton' src={VideoButton} alt="VideoButton"></img>
      </div>
      <div className='div-sec'>
        <img className='EnhanceImg' src={EnhanceImg} alt="EnhanceImg"></img>
      </div>
    </div>
  )
}

export default Enhance