import React from 'react';

function ListOfIndianPlayersMerged({ IndianPlayers }) { 
  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfIndianPlayersMerged;