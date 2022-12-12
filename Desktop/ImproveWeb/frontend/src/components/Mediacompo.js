import React from 'react'

export default function Mediacompo(props) {
  return (
    <div className='media-desc'>
        <div>
            <img className='media-img' src={props.img} alt="Case1"></img>
        </div>
        <div className='sub-component'>
            <div>
                <p className='media-head'>{props.p1}</p>
            </div>
            <div>
                <p className='media-about'>{props.p2}</p>
            </div>
        </div>
    </div>
  )
}
