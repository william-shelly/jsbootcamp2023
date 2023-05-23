import { useState } from 'react'
import './App.css'

function WelcomeMessage({name}) {
  const welcome = 'Welcome'
  return <h1>{welcome} {name}!</h1>
}

function Counter({count, setCount}) {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

const handleClickEvent = (event) => {
  alert('test')
}

function App() {
  // STATES
  const [count, setCount] = useState(0)

  // VARIABLES
  const username='William'
  const message = <WelcomeMessage name={username} />

  return (
    <>
      <div className="card">
        {
          message === <WelcomeMessage /> ?
            'The message was WelcomeMessage component"' : message
        }

        <Counter setCount={setCount} count={count} />

        <button onClick={handleClickEvent}>Test Alert</button>
      </div>
    </>
  )
}

export default App
