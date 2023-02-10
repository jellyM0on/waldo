import './App.css';
import Header from './Components/header.js'
import Selection from './Components/game-selection';
import Game from './Components/game-interface';
import * as gamelist from './Components/game-resources.json';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leaderboard from './Components/leaderboard';

function App(props) {
  const { saveRecord, getRecord } = props;

  const list = JSON.stringify(gamelist); 
  const imgList = JSON.parse(list); 
  const imgs = imgList.images;

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Selection imgs={imgs}/>}></Route>
          {imgs.map((img, i) => (
            <Route key={i} exact path={`/${img.imgCode}`} element={<Game saveRecord={saveRecord} data={img}/>} ></Route>
          ))}
          <Route exact path={`/leaderboard`} element={<Leaderboard getRecord={getRecord} imgs={imgs}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
