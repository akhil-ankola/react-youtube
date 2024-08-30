import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor, setBgColor] = useState("red")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: bgcolor }}></div>
    </>
  )
}

export default App
