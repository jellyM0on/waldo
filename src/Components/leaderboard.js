import { useState, useEffect, useCallback } from "react";

export default function Leaderboard(props){
    const { getRecord, imgs } = props; 
    const [records, setRecords] = useState();  
    const [sorted, setSorted] = useState([]);  
    const [selected, setSelected] = useState(); 
    const [test, setTest] = useState(); 

    useEffect(() => {
        (async () => {
            const record = await getRecord(); 
            setRecords(record);
        })() 
    },[]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(test != 1){
                setTest(test + 1); 
            } 
        }, 1000); 
        return () => {
            clearInterval(interval); 
        }
    }, []);

    useEffect(() => {
        if(!selected && records){
           setSorted(sortRec(records, 'img1-1')); 
        }
    }, [test])

    useEffect(() => {
        if(records){
            const sortedRec = sortRec(records, selected); 
            setSorted(sortedRec); 
        }
    }, [selected])

    const sortRec = (records, selected) => {
        const toNumber = (str) => {
            str = str.split(':');
            let numArr = str.join(''); 
            return parseInt(numArr); 
        }
        console.log(records); 
        const filtered = records.filter(x => x.game == selected);
        const sorted = filtered.sort((a,b) => toNumber(a.time) > toNumber(b.time)? 1 : -1)
        return sorted; 
    }

    const DisplayRec = (props) => {
        const { data, test } = props; 

        if(data.length >= 1){
            return(
                <table>
                
                    <thead></thead>
                    <tbody>
                    {data.map((x, i) => {
                        if(i <=19 ){
                            return(
                                <DataRow name={x.name} time={x.time} rank={i+1} key={i}/> 
                            )
                        } else {
                            return; 
                        }
                    })}
                    </tbody>
                    <tfoot></tfoot>
                </table>
            )
        } else {
            return(
                <div>No records yet!</div>
            )
        }
    }

    const DataRow = (props) => {
        const { rank, name, time, date } = props; 
        return(
            <tr>
                <td>{rank}</td>
                <td>{name}</td>
                <td>{time}</td>
                <td>{date}</td>
            </tr>
        )
    }
    

    const dropdownHandler = (e) => {
        setSelected(e.target.value); 
    }

    return(
        <div>
           <select id='games-dropdown' onChange={dropdownHandler}>
                {imgs.map((img, i) => {
                    return <option key={i}>{img.imgCode}</option>
                })}
           </select>
           <DisplayRec data={sorted} test={selected}/>
        </div>
    )
}