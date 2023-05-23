function Button({step, decrement}) { //increment
  return (
    <button
    className='rounded-lg bg-orange-600 px-4 py-2 mx-2 my-2 text-white'
      onClick={() => {
        // increment(step)
        decrement(step)
        }
      }
    >
      {/* +{step} */}
      -{step}
    </button>
  )
}

export default Button
