import { useState, useEffect } from "react";

export default function Leaderboard(props){
    const { getRecord } = props; 
    const [records, setRecords] = useState(); 

    useEffect(() => {
        (async () => {
            const records = await getRecord(); 
            setRecords(records); 
        })()
    }, []);


    console.log(records); 

    return(
        <div>
           
        </div>
    )
}