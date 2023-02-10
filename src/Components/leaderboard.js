import { useState, useEffect } from "react";

export default function Leaderboard(props){
    const { getRecord, imgs } = props; 
    const [records, setRecords] = useState();  
    const [loading, setLoading] = useState(true);  
    const [selected, setSelected] = useState(); 

    useEffect(() => {
        (async () => {
            const records = await getRecord(); 
            setRecords(records); 
            setLoading(false); 
        })()  
    },[]);

    const LoadRecords = (props) => {
        const { selected } = props;
            if(loading){
                return(
                    <div>
                        Loading...
                    </div>
                )
            } 
            if(records){
                return(
                    <DisplayRecords selected = {selected}/>
                )
            }         
    }

    const DisplayRecords = (props) => {
        const { selected } = props; 
        const data = sortRecords(selected); 
    
        if(data.length >= 1){
            return(
                <table>
                    {data.map((x, i) => {
                        if(i <=19 ){
                            return(
                                <DataRow name={x.name} time={x.time} rank={i+1}/> 
                            )
                        } else {
                            return; 
                        }
                    })}
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

    const toNumber = (str) => {
        str = str.split(':');
        let numArr = str.join(''); 
        return parseInt(numArr); 
    }

    const sortRecords = (selected) => {
        if(records) {
            const filtered = records.filter(x => x.game == selected);
            const sorted = filtered.sort((a,b) => toNumber(a.time) > toNumber(b.time)? 1 : -1)
            return sorted; 
        } else {
            return []; 
        }
    }

    const dropdownHandler = (e) => {
        setSelected(e.target.value); 
    }

    return(
        <div>
           <select id='games-dropdown' onChange={dropdownHandler}>
                <option>--</option>
                {imgs.map((img, i) => {
                    return <option key={i}>{img.imgCode}</option>
                })}
           </select>
           <LoadRecords records = {records} selected = {selected} />
        </div>
    )
}