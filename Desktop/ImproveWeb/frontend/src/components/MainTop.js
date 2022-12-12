import React from 'react'
// import Graphics from "../graphics.jpg"
import Laptop from "../images/laptop.jpg"
 
function MainTop() {
  return (
    <div className='maintop-container'>
      <div className='sub-div1'>
        <p><span className='color-fill'>Grow Digitally</span></p>
        <p className='heading'>Boosts your<br /><span className='color-fill'>website traffic!</span></p>
        <input className='main-input' type="text" id="fname" name="firstname" placeholder="Mail Adress*"></input>
        <input className='main-input' type="text" id="fname" name="firstname" placeholder="yoursite.com*"></input><br />
        <button className='check-now'>Check Now</button>
      </div>
      <div className='sub-div2'>
        <img className='graphics' src={Laptop} alt="design"></img>
      </div>
    </div>
  )
}

export default MainTop
