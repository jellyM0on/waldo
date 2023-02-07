import { Link } from "react-router-dom";

export default function Selection(props){
    const { imgs } = props; 

    const DisplayGame = (props) => {
        const { name, img } = props; 
        console.log(name); 
        return(
        <div>
            <Link to={`/${name}`}>
                <img class='selection-img' src={img}></img>
                <h3>{name}</h3>
            </Link>
            
        </div>
        )
    }

    return(
        <div>
            <div class='selection'>
                {imgs.map((img, i) => (
                <DisplayGame name={img.imgCode} img={img.img} key={i}/>
                ))}
            </div>
        </div>
    )
}