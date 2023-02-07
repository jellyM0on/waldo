import { useState, useEffect } from 'react';
import './Styles/game-interface.css'; 
import Timer from './game-timer';
import GameFinish from './game-finish';


export default function Game(props) {
    const { storage, saveRecord} = props; 
    const [time, setTime] = useState('00:00:00'); 
    const [finished, setFinished] = useState(0);

    const getCoord = (event) => {
        console.log(event.clientY);
        console.log(event.clientX); 
        if((event.clientY > 130 && event.clientY < 170) && (event.clientX > 400 && event.clientX < 440)){
            setFinished(1); 
        }
    }

    const FinishGame = () => {
        if(finished){
            return <GameFinish time={time} saveRecord={saveRecord}/>
        }
    }

    return(
        <div>
            <div>Where's Waldo</div>
            <div className='timer-container'>
                <Timer time={time} setTime={setTime} finished={finished} storage={storage}/>
            </div>

            <form>
                <div className='pic-container' onClick={getCoord}>
                    <img src='https://i.imgur.com/lBqwrz4.jpeg'></img>
                </div>
            </form>

            <FinishGame/>

        </div>
    )
}