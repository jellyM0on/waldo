import './Styles/header.css';
import { Link } from 'react-router-dom';

export default function Header(){

    return(
        <div id='heading'>
            <Link to='./'><h1>Where's Waldo?</h1></Link>
            
            <div className='heading-menu'>
                <Link to='./Leaderboard'><div>Leaderboards</div></Link>
               
            </div>
        </div>
    )
}