import './Styles/header.css';

export default function Header(){

    return(
        <div id='heading'>
            <h1>Where's Waldo?</h1>
            <div className='heading-menu'>
                <div>Game</div>
                <div>Leaderboards</div>
            </div>
        </div>
    )
}