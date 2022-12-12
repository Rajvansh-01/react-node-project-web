import React from 'react'

export default function cases(props) {
  return (
    <div className='Case-desc'>
        <div>
            <img className='Case1' src={props.img} alt="Case1"></img>
        </div>
        <div>
            <p className='Case-head'>{props.p1}</p>
        </div>
        <div>
            <p className='case-about'>{props.p2}</p>
        </div>
    </div>
  )
} 
