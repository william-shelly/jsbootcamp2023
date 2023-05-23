import { useState } from 'react'
import Form from './components/Form'
import CardList from './components/CardList'
// import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const addNewCard = (card) => {
    setCards([...cards, card])
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <section className="columns-1">
          <h1 className='pt-10 mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900'>
            Search a GitHub User
          </h1>
        </section>
        <section className="columns-1">
          <Form onSubmit={addNewCard} />
          <CardList cards={cards} />
        </section>
      </div>
    </>
  )
}

export default App
