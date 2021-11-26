
import React, { useState }  from 'react'
import './style.css'

function Clock() {

const date = new Date().toLocaleTimeString();
const [clockState,setClockState]=useState(date);

const updateTime=()=>{
    let time=new Date().toLocaleTimeString();
    setClockState(time);

}

setInterval(updateTime,1000)
    return (
        <div>
          <h1> {clockState}</h1>
        </div>
    )
}

export default Clock;

