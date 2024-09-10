import { useState, useCallback } from 'react';
import './App.css'

function App() {
  const [ legth, setLength ] = useState(8)
  const [ numberAllowed, setNumberAllowed ] = useState(false);
  const [ characterAllowed, setCharaterAllowed ] = useState(false);
  const [ password, setPassword ] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass= "";

    if(numberAllowed) str += "0123456789";
    if(characterAllowed) str += "!@#$%^&^&*()_+";

    for( let i=1; i<=legth; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass=str.charAt(char);
    }

    setPassword(pass);

  } , [legth, numberAllowed, characterAllowed, setPassword]);

  return (
    <>
      <div className="bg-gray-800 w-full h-full p-4 rounded-sm">
        <div className="w-full flex">
          <input type="text" className="bg-white text-blue-950 w-full p-2 rounded-l-lg rounded-r-none outline-none" read/>
          <button className="bg-blue-700 text-white rounded-l-none rounded-r-lg">copy</button>
        </div>
        <div className="mt-3 flex justify-between gap-5">
          <div className="">
            <input type="range" min={6} max={20} value={length} className="mr-1 cursor-pointer" onChange={ (e) => { setLength(e.target.value) } }/>
            <lebal>Length: {legth}</lebal>
          </div>
          <div className="">
            <input type="checkbox" className="mr-1" defaultChecked={numberAllowed} id="numinout" onChange={()=>{setNumberAllowed( (prev) => !prev ); }}/>
            <lebal>Numbers</lebal>
          </div>
          <div className="">
            <input type="checkbox" className="mr-1" defaultChecked={characterAllowed} id="charinout" onChange={()=>{setCharaterAllowed( (prev) => !prev ); }} />
            <lebal>Charaters</lebal>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
