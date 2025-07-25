import React from 'react';
import './App.css'; 
import { CalculateScore } from './Components/CalculateScore'; 

function App() {
  return (
    <div className="App">
    
      <CalculateScore
        Name={"Swarna Latha"}
        School={"Chaitanya Public School"}
        total={584}
        goal={600} 
      />
    </div>
  );
}

export default App;