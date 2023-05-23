import { useState } from 'react'
import Button from './components/Button'
// import Resetbutton from './components/Resetbutton'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  // const increment = (step) => {
  //   setCount(count + step)
  // }

  const decrement = (step) => {
    setCount(count - step)
  }

  return (
    <>
      <div className='App container my-4 mx-auto'>
        <div className='columns-1 text-center'>
          <h1 className='text-2xl'>Counter: {count}</h1>
          {/* <Button step={1} increment={increment} />
          <Button step={10} increment={increment} />
          <Button step={100} increment={increment} /> */}

          <Button step={1} decrement={decrement} />
          <Button step={10} decrement={decrement} />
          <Button step={100} decrement={decrement} />

          {/* <Resetbutton /> */}

          <button
            className='rounded-lg bg-blue-600 px-4 py-2 mx-2 my-2 text-white' 
            onClick={() => {
                console.log('Reset button clicked')
                setCount(0)
              }
            }
          >
            Reset
          </button>

        </div>
      </div>
    </>
  )
}

export default App
