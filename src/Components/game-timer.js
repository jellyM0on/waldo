import { useState, useEffect } from 'react';

export default function Timer(props) {
    const { finished } = props;
    const [time, setTime] = useState('00:00:00'); 

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
            const interval = setInterval(() => {
                if(finished != 1){
                    trackTime(); 
                } 
            }, 1000); 
            return () => {
                clearInterval(interval); 
            }
    }, [finished]);

    return(
        <p>{time}</p>
    )
}