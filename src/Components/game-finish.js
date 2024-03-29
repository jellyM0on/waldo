import { useState, useEffect } from 'react';

export default function GameFinish(props){
    const { time, saveRecord } = props; 
    const [record, setRecord] = useState();

    const userRecord = (name, time) => {
        const gameImg = document.querySelector('.game-img');
        const game = gameImg.id 
        return { name, time, game }; 
    }

    const recordInfo = (e) => {
        e.preventDefault(); 
        const nameInput = document.querySelector('#user-name'); 
        const name = nameInput.value; 
        const record = userRecord(name, time);
        saveRecord(record); 
    }


    return(
        <div>
            <form>
                <p>You found all the characters within {time}!</p>
                <label htmlFor='user-name' >Name: </label>
                <input type='text' id='user-name'></input>
                <button onClick={recordInfo}>Submit</button>
            </form>
        </div>
    )
}