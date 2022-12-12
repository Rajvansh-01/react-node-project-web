import React from 'react';
import Media1 from "../images/media1.jpg";
import Media2 from "../images/media2.jpg";
import Media3 from "../images/media3.jpg";
import Mediacompo from "./Mediacompo";

export default function Media() {
  return (
    <div className='media-div'>
        <p><span className='color-fill media-p'>News & Blogs</span></p>
        <div className='div-h'>
            <p className='media-study-head'>Our Latest Media</p>
        </div>
        <div className='div-g'>
            <div class="grid-container-media">
                <Mediacompo img={Media1} p1={"October 12, 2022"} p2={"10 Reasons Why Your Website Isn’t Showing Up On Google (and How to Fix It)"} />
                <Mediacompo img={Media2} p1={"October 7, 2022"} p2={"DIY SEO: Learn to Do it Yourself SEO In 6 Easy Steps"} />
                <Mediacompo img={Media3} p1={"September 26, 2022"} p2={"How to Get to the Top of Google Search Results"} />
            </div>
        </div>
    </div>
  )
}
