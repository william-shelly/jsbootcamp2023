import {useState} from 'react'

function Form(props) {

  const [username, setUsername] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await fetch(`https://api.github.com/users/${username}`)
    if (response.status === 200) {
      const data = await response.json()
      props.onSubmit(data)
      setUsername('')
    } else {
      alert('Username not found')
    }
  }

  return (
    <form
      className='w-full max-w-sm mx-auto'
      onSubmit={handleSubmit}
    >
      <div className='flex mt-10'>
      <label htmlFor='username' className='sr-only' />
      <input
          id='username'
          name='username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300'
        />
        <button
          type='submit'
          className='px-3 py-2 ml-2 text-sm font-medium leading-4 text-gray-700 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800'>
          Search
        </button>
      </div>
    </form>
  )
}

export default Form
