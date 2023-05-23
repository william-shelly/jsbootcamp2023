import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddBill(props) {
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState(props.categories[0])
  const [date, setDate] = useState(new Date())

  const handleChangeAmount = (e) => {
    setAmount(parseInt(e.target.value), 10)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!amount) {
      alert('Please enter a valid amount')
      return
    }
    props.onSubmit(amount, category || props.categories[0], date)
  }

  const handleChangeDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <form
      className='flex items-center justify-center w-full font-sans h-100'
      onSubmit={handleSubmit}
    >
      <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
        <div className='mb-4'>
          <h1 className='text-grey-darkest'>Enter a New Bill</h1>
          <div className='flex mt-4'>
            <span className='mt-2 mr-1'>$</span>
            <input
              id='categoryname'
              name='categoryname'
              className='w-full px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker'
              placeholder='Add Category'
              value={amount}
              onChange={handleChangeAmount}
            />

            <select name="categories" id="categories">
              {
                props.categories
                  ? props.categories.map((value, index) => {
                    return (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    )
                  })
                : ''
              }
            </select>

            <div className='mt-2 ml-1'>
              <DatePicker selected={date} onChange={handleChangeDate} />
            </div>

            <button
              className='p-2 text-white bg-green-500 border-2 rounded flex-no-shrink bg-teal border-teal hover:text-white hover:bg-teal'
            >
              Add
            </button>

          </div>
        </div>
      </div>
    </form>
  )
}

export default AddBill
