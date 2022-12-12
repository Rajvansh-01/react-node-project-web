import React from 'react';
import Experiences from "../../images/experience.jpg";
import Exp from "./Exp"
import Exp1 from "../../images/exp-1.jpg";
import Exp2 from "../../images/exp-2.jpg";
import Exp3 from "../../images/exp-3.jpg";
import Exp4 from "../../images/exp-4.jpg";
import "./experience.css"
 
export default function Experience() {
  return (
    <div className='experience-contain'>
      <div className='div-exp'>
        <p><span className='color-fill'>Boosting</span></p>
        <p className='heading'>Outstanding<br /><span className='color-fill'>Digital</span> Experience</p>
        <div class="grid-container-experiences">
            <Exp img={Exp1} p2={"We make comprehensive strategies that make businesses unique from competitors."} />
            <Exp img={Exp2} p2={"Our expert team dominate the market with conversions by using excellent strategy for businesses."} />
            <Exp img={Exp3} p2={"Our team live and breath for achieving our clients' vision and are fully committed to elevating business to new heights."} />
            <Exp img={Exp4} p2={"We offer fully integrated and data-centric approach for businesses to grow and establish digitally."} />
        </div>
        <button className='check-now'>Get Started</button>
      </div>
      <div className='div-one'>
        <img className='Experiences' src={Experiences} alt="Experiences"></img>
      </div>
    </div>
  )
}
