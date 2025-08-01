import React from 'react';
import './App.css';
import ListOfPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = false; 

  const players = [
    { name: "swarna", score: 50 },
    { name: "ganesh", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "siri", score: 64 },
    { name: "Raina", score: 75 },
    { name: "sharmila", score: 80 }
  ];

  return (
    <div className="App">
      {flag ? (
        <>
          <ListOfPlayers players={players} />
        </>
      ) : (
        <>
          <IndianPlayers />
        </>
      )}
    </div>
  );
}

export default App;