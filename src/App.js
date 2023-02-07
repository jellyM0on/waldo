import './App.css';
import Game from './Components/game-interface';

function App(props) {
  const { saveRecord } = props;

  
  return (
    <div className="App">
      <Game saveRecord={saveRecord}/>
    </div>
  );
}

export default App;
