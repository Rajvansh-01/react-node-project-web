import React from 'react';
import Case1 from "../../images/case1.jpg";
import Case2 from "../../images/case2.jpg";
import Case3 from "../../images/case3.jpg";
import Cases from "./Cases";
import "./casestudy.css"
 
export default function Casestudy() {
  return (
    <div className='case-study'>
        <p><span className='color-fill case-p'>Know more about our</span></p>
        <div className='div-h'>
            <p className='case-study-head'>Latest Case Studies</p>
        </div>
        <div className='div-g'>
            <div class="grid-container-casestudy">
                {/* <div className='Case-desc'>
                    <div> 
                        <img className='Case1' src={Case1} alt="Case1"></img>
                    </div>
                    <div>
                        <p className='Case-head'>PPC, Sales</p>
                    </div>
                    <div>
                       <p className='case-about'>Driving Cutting-Edge Results With Improve Digitally</p>
                    </div>
                </div> */}
                <Cases img={Case1} p1={"PPC, Sales"} p2={"Driving Cutting-Edge Results With Improve Digitally"} />
                <Cases img={Case2} p1={"SEO, Visitor"} p2={"SEO Provides New Users, Traffic Increase And Top Ranking"} />
                <Cases img={Case3} p1={"SEO, Visitor"} p2={"Indigenous Organic Growth To History Of Soccer"} />
            </div>
        </div>
    </div>
  )
}
