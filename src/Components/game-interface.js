import { useState, useEffect } from 'react';
import './Styles/game-interface.css'; 

export default function Game() {
    const [time, setTime] = useState(0); 
    const [finished, setFinished] = useState(0);

    const elapsedTime = (hrs, mins, secs) => {
        hrs = cleanTime(hrs);
        mins = cleanTime(mins); 
        secs = cleanTime(secs); 
        return { hrs, mins, secs }
    }
   
    function cleanTime(time){
        time = time >= 10 ? time : `0${time}`;
        return time; 
    }

    let secs = 0 , mins = 0, hrs = 0;  
    function trackTime() {
        secs += 1;
        if(secs == 60){
            secs = 0; 
            mins += 1; 
        }
        if(mins == 60){
            mins = 0; 
            hrs += 1; 
        }
        let elTime = (elapsedTime(hrs, mins, secs)); 
        setTime(`${elTime.hrs}:${elTime.mins}:${elTime.secs}`)
    }
 
    useEffect(() => {
        if (!finished){
            const interval = setInterval(() => trackTime(), 1000); 
            return () => {
                clearInterval(interval); 
            }
        } 
    }, []);
    
    return(
        <div>
            <div>Where's Waldo</div>
            <div className='timer-container'>
                <p>{time}</p>
            </div>

            <div className='pic-container'>
                <img src='https://i.imgur.com/lBqwrz4.jpeg'></img>
            </div>
        </div>
    )
}