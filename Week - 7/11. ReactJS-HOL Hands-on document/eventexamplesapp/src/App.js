import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const handleIncrementClick = () => {
    incrementCounter();
    sayHello();
  };

  const handleDecrementClick = () => {
    setCount(prevCount => prevCount - 1);
  };

  const sayMessage = (message) => {
    alert(message);
  };

  const handleClickMe = (event) => {
    alert("I was clicked");
    console.log("Synthetic Event:", event);
  };

  return (
    <div className="App">
      
      <h1>{count}</h1> 
      
      <button onClick={handleIncrementClick}>Increment</button>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={() => sayMessage("welcome")}>Say Welcome</button>
      <button onClick={handleClickMe}>Click on me</button>

      
      <CurrencyConvertor />
    </div>
  );
}

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue)) {
      alert("Please enter a valid amount.");
      return;
    }

    const INR_TO_EURO_RATE = 0.0111;
    const EURO_TO_INR_RATE = 90;

    let convertedAmount;
    let message = "";

    if (currency.toLowerCase() === "euro") {
      convertedAmount = amountValue * EURO_TO_INR_RATE;
      message = `Converting to INR Amount is ${convertedAmount.toFixed(2)}`;
    } else if (currency.toLowerCase() === "inr") {
      convertedAmount = amountValue * INR_TO_EURO_RATE;
      message = `Converting to Euro Amount is ${convertedAmount.toFixed(2)}`;
    } else {
      message = "Please enter 'Euro' or 'INR' for currency.";
    }

    alert(message);
  };

  return (
    <div className="CurrencyConvertor">
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Currency:</label>
          <input
            type="text"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder="e.g., Euro or INR"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
