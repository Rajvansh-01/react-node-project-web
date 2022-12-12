import React from 'react'
import Community from "../../images/community.jpg"
import "./expand.css"

function Expand() {
  return ( 
    <div className='second-container'>
      <div className='div-one'>
        <img className='Community' src={Community} alt="Community"></img>
      </div> 
      <div className='div-two'>
        <p><span className='color-fill'>Our commitment</span></p>
        <p className='heading'>Grow your<br /><span className='color-fill'>business</span> digitally</p>
        <div class="grid-container">
            <div className='inc-desc'><span className='parameter'>10x</span><br />Increase in<br />Website Organic<br />Traffic</div>
            <div className='inc-desc'><span className='parameter'>5x</span><br />Increase in<br />Quality<br />Conversions</div>
            <div className='inc-desc'><span className='parameter'>45%</span><br />Growth on Social<br />Media</div>  
            <div className='inc-desc'><span className='parameter'>33%</span><br />Quality<br />Conversions<br />Through Social<br />Media</div>
            <div className='inc-desc'><span className='parameter'>18x</span><br />Increase in<br />Conversions<br />Through Email</div>
            <div className='inc-desc'><span className='parameter'>50%</span><br />Higher<br />Conversion for<br />Local Business</div>  
        </div>
        <button className='check-now'>Get free consultation</button>
      </div>
    </div> 
  )
}

export default Expand
