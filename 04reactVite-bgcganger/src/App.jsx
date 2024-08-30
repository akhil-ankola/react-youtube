import { useState } from 'react';
import './App.css';

function App() {
  const [bgcolor, setBgColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen text-zinc-200 m-0" style={{backgroundColor:`${bgcolor}`}}>
        <div className="flexed flex flex-wrap justify-center bottom-12 inset-x-0">
          <div className="flexed flex flex-wrap justify-center p-2 bg-white rounded-full inset-x-2">
            <button onClick={ () => setBgColor("red") } className="outline-none p-2 rounded-full" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={ () => setBgColor("yellow") } className="outline-none p-2 rounded-full" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={ () => setBgColor("purple") } className="outline-none p-2 rounded-full" style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={ () => setBgColor("blue") } className="outline-none p-2 rounded-full" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={ () => setBgColor("green") } className="outline-none p-2 rounded-full" style={{backgroundColor:"green"}}>Green</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
