import { useState, useEffect } from 'react';

export default function GameFinish(props){
    const { time } = props; 
    return(
        <div>
            <form>
                <p></p>
                <label htmlFor='user-name'>Name: </label>
                <input type='text' id='user-name'></input>
            </form>
        </div>
    )
}