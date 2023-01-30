import { useState, useEffect } from 'react';
import './Styles/game-interface.css'; 

export default function Game() {
    const [time, setTime] = useState(0); 
    const [finished, setFinished] = useState(0);

    function trackTime(startTime) {
        let elapsed = new Date() - startTime; 
        setTime(elapsed); 
     }
 
    useEffect(() => {
        let start = new Date(); 
        if (!finished){
            setInterval(() => {
                trackTime(start)
            }, 1000); 
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