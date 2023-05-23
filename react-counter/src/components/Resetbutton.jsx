function Resetbutton() {
  return (
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
  )
}

export default Resetbutton
