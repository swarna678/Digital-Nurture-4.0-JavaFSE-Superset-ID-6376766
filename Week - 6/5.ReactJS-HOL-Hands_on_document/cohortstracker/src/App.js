
import React from 'react';
import './App.css'; 
import CohortDetails from './Components/CohortDetails'; 


const cohortsData = [
  {
    id: '1', 
    name: 'INTADMDMF10 - .NET FSD',
    startedOn: '22-Feb-2023',
    currentStatus: 'Scheduled',
    coach: 'chandana',
    trainer: 'meenakshi'
  },
  {
    id: '2',
    name: 'ADM21JF014 - Java FSD',
    startedOn: '10-Sep-2021',
    currentStatus: 'Ongoing', 
    coach: 'Sharmila',
    trainer: 'Poornam'
  },
  {
    id: '3',
    name: 'CDBJF21025 - Java FSD',
    startedOn: '24-Dec-2024',
    currentStatus: 'Ongoing',
    coach: 'Ganesh',
    trainer: 'Swarna Latha'
  }
];

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', marginBottom: '30px'}}>Cohorts Details</h1> {/* Main title */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cohortsData.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} /> 
        ))}
      </div>
    </div>
  );
}

export default App;