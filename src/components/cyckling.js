import React from 'react'
import cyckling from "../components/images/bike-bicycle.gif"
import './cyckling.css'

export const Cyckling = () => {
  return (
    <div className='marquee' style={{backgroundColor:'var(--mainColor)'}}>
       <img src = {cyckling} alt= "cyckle" style={{height:"80px",width:"80px"}}/>
    </div>
  )
}
