import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const defaultname = 'William'

  const username = 'William'
  const partner = 'Christie'

  const [name, setName] = useState(username)

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  }, [name, count])

  return (
    <>
      <p>Hi {name}, you clicked {count} times</p>
      <button onClick={() => setCount(count +1)}>Click me</button>

      <button onClick={() => setName(name === defaultname ? partner : defaultname)}>Change {name}</button>

    </>
  )
}

export default App
