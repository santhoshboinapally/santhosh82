import React from 'react'
import cyckling from "../components/images/bike-bicycle.gif"

export const Cyckling = () => {
  return (
    <div style={{backgroundColor:'var(--mainColor)'}}>
        <marquee  direction="right">
        <img src = {cyckling} alt= "cyckle" style={{height:"80px",width:"80px"}}/>
       </marquee> 
    </div>
  )
}
