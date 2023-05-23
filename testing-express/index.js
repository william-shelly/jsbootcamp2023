import express from "express"
const app = express()

const people = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Roger' },
    { id: 2, name: 'Sam' },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/people', (req, res) => {
  res.json(people)
})

app.get('/person/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const person = people.find(person => person.id === id)

  if (person) {
    res.json(person)
    return
  }
  res.sendStatus(404)
})

app.listen(3000, () => {
  console.log('Server Ready!')
})
