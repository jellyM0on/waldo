import { useState, useEffect } from 'react';
import './Styles/game-interface.css'; 
import Timer from './game-timer';

export default function Game() {
    const [finished, setFinished] = useState(0);

    const getCoord = (event) => {
        console.log(event.clientY);
        console.log(event.clientX); 
        if((event.clientY > 130 && event.clientY < 170) && (event.clientX > 400 && event.clientX < 440)){
            setFinished(1); 
        }
    }

    return(
        <div>
            <div>Where's Waldo</div>
            <div className='timer-container'>
                <Timer finished={finished}/>
            </div>

            <form>
                <div className='pic-container' onClick={getCoord}>
                    <img src='https://i.imgur.com/lBqwrz4.jpeg'></img>
                </div>
            </form>
        </div>
    )
}