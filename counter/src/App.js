import React, { useState } from "react";

import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)} className="plus">Plus +</button>
        <button onClick={() => setCount(prev => prev - 1)} className="minus">Minus -</button>
        <button onClick={() => setCount(0)} className="reset" >Reset</button>
      </div>
    </div>
  );
}

export default App;
