import Form from './Form';
import React, { useState } from 'react';
import {currencies} from "./currencies.js"

function App() {

  const [result, setResult] = useState();

  const countResult = (currency, amount) => {
    const rate = currencies
    .find(({short}) => short === currency)
    .rate;
    
    setResult({
      startAmount: +amount,
      finalAmount: amount / rate,

    })
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
