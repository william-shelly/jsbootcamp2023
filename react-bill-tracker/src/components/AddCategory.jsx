import { useState } from 'react'

function AddCategory(props) {
  const [category, setCategory] = useState('')

  const handleChange = (e) => {
    setCategory(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!category) {
      alert('Please enter a category')
      return
    }
    props.onSubmit(category)
  }

  return (
    <form 
      className='flex flex-col items-center justify-center w-full font-sans h-100'
      onSubmit={handleSubmit}
    >
      <div className='mb-4'>
        <h1 className='text-grey-darkest'>Enter a category of bills</h1>
        <p>E.g. 'Electricity' or 'Gas' or 'Internet'</p>
      </div>
      <div className='flex mb-2'>
        <input
          className='w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker'
          placeholder="Add Category"
          type="text"
          value={category}
          onChange={handleChange}
        />
        <button className='p-2 text-white bg-green-500 border-2 rounded flex-no-shrink bg-teal border-teal hover:text-white hover:bg-teal'>Add</button>
      </div>
    </form>
  )
}

export default AddCategory
