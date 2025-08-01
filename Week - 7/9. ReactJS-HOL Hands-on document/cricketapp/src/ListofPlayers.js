import React from 'react';

function ListOfPlayers({ players }) {
  const playersBelow70 = [];
  players.map((item) => { 
    if (item.score <= 70) { 
      playersBelow70.push(item);
    }
  });

  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((item, index) => ( 
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>

      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {playersBelow70.map((item, index) => ( 
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;