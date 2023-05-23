import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="columns-1">
          <h1>New React Site</h1>
        </div>
      </div>
    </>
  )
}

export default App
