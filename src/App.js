import './App.css';
import Game from './Components/game-interface';
import * as gamelist from './Components/game-resources.json';


function App(props) {
  const { saveRecord } = props;

  const list = JSON.stringify(gamelist); 
  const imgList = JSON.parse(list); 
  const imgs = imgList.images;

  console.log(imgs);

  return (
    <div className="App">
      <Game saveRecord={saveRecord}/>
    </div>
  );
}

export default App;
