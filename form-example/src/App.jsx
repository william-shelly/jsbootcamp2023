import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('/api/form', {
      body: JSON.stringify({
        username,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  }

  return (
    <>
    <div className="container my-4 mx-auto">
      <div className="columns-2">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="username">Username</label>
            </div>
            <div className="">
              <input
                input="text"
                id="username"
                value={username}
                placeholder='Please enter your username'
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default App
