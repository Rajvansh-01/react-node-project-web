import React from 'react'

export default function Exp(props) {
  return (
    <div className='exp-desc'>
        <div>
            <img className='exp-pic' src={props.img} alt="Case1"></img>
        </div>
        <div>
            <p className='exp-about'>{props.p2}</p>
        </div>
    </div>
  )
}
