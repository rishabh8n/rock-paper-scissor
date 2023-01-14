import Header from './components/header';
import Game from './components/game';
import './App.css';
import { useState } from 'react';

function App() {
  const [score,setScore] = useState(0);
  const incScore=()=>{
    setScore(score+1);
  }
  return (
    <div className="container">
      <Header score={score}/>
      <Game incScore={incScore}/>
    </div>
  );
}

export default App;
