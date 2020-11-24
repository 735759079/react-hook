import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <p>click{count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default App;
