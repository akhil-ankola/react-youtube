import { useState } from 'react'
import './App.css'

function App() {
 
  const[count, setcount] = useState(0);

  function addCountHandler(){
    if(count<10){
      return setcount(count+1);
    }
  }
  function removeCountHandler(){
    return setcount(count-1);
  }
  function counterResetHandler(){
    return setcount(0);
  }

  return (
    <>
      <h1>Chai with React</h1>
      <h2>Counter : {count}</h2>
      <div>
        <button onClick={addCountHandler}>Add</button>
        <button onClick={counterResetHandler}>Reset</button>
        <button onClick={removeCountHandler}>Remove</button>
      </div>
    </>
  )
}

export default App
