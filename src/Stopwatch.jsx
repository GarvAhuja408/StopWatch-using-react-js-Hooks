import { useState,useRef } from "react";
import "./Stopwatch.css";

export default function(){

    let[time,setTime]=useState(0);
    let interval = useRef(null);

    function handleStart(){
        if(interval.current)return;

        interval.current = setInterval( ()=>{
            setTime((prev)=>prev+1);
        },1000)
    }

    function handleStop(){
        clearInterval(interval.current);
        interval.current = null;
    }

    function handleReset(){
        clearInterval(interval.current);
        interval.current=null;
        setTime(0);
    }

    return(
        <div className="watch">
            <p>{time}</p>

            <button className="watch-btn" onClick={handleStart}>Start</button>
            <button className="watch-btn" onClick={handleStop}>Stop</button>
            <button className="watch-btn" onClick={handleReset}>Reset</button>
        </div>
    )
}