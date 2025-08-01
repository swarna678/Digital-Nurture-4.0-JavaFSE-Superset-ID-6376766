import React from 'react';

export function OddPlayers({ team }) {
  const [first, , third, , fifth] = team;
  return (
    <div>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}