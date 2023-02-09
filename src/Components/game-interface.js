import { useState, useEffect } from 'react';
import './Styles/game-interface.css'; 
import Timer from './game-timer';
import GameFinish from './game-finish';

export default function Game(props) {
    const { data, saveRecord } = props; 
    const [time, setTime] = useState('00:00:00'); 
    const [found, setFound] = useState([]);
    const [finished, setFinished] = useState(0);
    const [icon, setIcon] = useState(0); 

    const coordKeys = data.imgCoords; 

    const getCoord = (event) => {
        const img = document.querySelector('.game-img');
        const xClick = event.pageX - img.offsetLeft;
        const yClick = event.pageY - img.offsetTop;
        console.log(xClick);
        console.log(yClick);  
        checkCoords(xClick, yClick);
    }

    const checkCoords = (xClick, yClick) => {
        coordKeys.map((a) => {
            const character = (Object.keys(a)).toString();
            const coords = Object.values(a); 
            const xCoord = parseInt(coords[0][0]); 
            const yCoord = parseInt(coords[0][1]); 

            if((xClick > xCoord-20 && xClick < xCoord+20) && (yClick > yCoord-20 && yClick < yCoord+20)){
                console.log("match");
                const tempFound = found; 

                if(!(tempFound.find((x) => (x == character)))){
                    tempFound.push(character);
                    setFound(tempFound); 
                    setIcon(100); 
                }
                checkFinished(); 
            } 
        })
    }

    const allCharac = () => {
        let characters = [];
        coordKeys.map((x) => {
            characters.push(Object.keys(x).toString());
        });
        return characters; 
    }

    const checkFinished = () => {
        let status = 1; 
        allCharac().map((x) => {
            const checker = found.find((y) => y == x); 
            if (!checker) status = 0; 
        })
        if(status) setFinished(1); 
    }

    const FinishGame = () => {
        if(finished){
            return <GameFinish time={time} saveRecord={saveRecord}/>
        }
    }

    const DisplayCharacters = (props) => {
        const { filter } = props; 

        return allCharac().map((x) => {
            const checker = found.find((y) => y == x); 
            if(checker){
                return(
                    <img id={`${x}`} className='char-icon' 
                    src={require(`./picture-resources/${x}.png`)}
                    style={{filter: `grayscale(${filter}%)`}}></img>
                )
            } else {
                return(
                    <img id={`${x}`} className='char-icon' 
                    src={require(`./picture-resources/${x}.png`)}></img>
                )
            }
        })
    }

    return(
        <div className='game-interface'>
            <div>
                <div className='timer-container'>
                    <Timer time={time} setTime={setTime} finished={finished} />
                </div>
                <div className='characters-container'>
                    <DisplayCharacters filter={icon}/>
                </div>
                <form>
                    <div className='pic-container' onClick={getCoord}>
                        <img src={data.img} className='game-img' id={`${data.imgCode}`}></img>
                    </div>
                </form>

                <FinishGame/>
            </div>
        </div>
    )
}