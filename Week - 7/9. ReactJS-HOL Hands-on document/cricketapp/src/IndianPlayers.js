import React from 'react';
import { OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';
import ListOfIndianPlayersMerged from './ListOfIndianPlayersMerged';

function IndianPlayers() {
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const mergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

  return (
    <div>
      <h1>Indian Team</h1>
      <h2>Odd Players</h2>
      <OddPlayers team={IndianTeam} />
      <hr />
      <h2>Even Players</h2>
      <EvenPlayers team={IndianTeam} />
      <hr />
      <ListOfIndianPlayersMerged IndianPlayers={mergedIndianPlayers} />
    </div>
  );
}

export default IndianPlayers;