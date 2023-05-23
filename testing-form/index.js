import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }))

const people = [
  { name: 'William' },
  { name: 'Christie' },
  { name: 'Penny' },
  { name: 'Lucy' },
]

app.get('/', (req, res) => {
  const page = `
    <html>
      <head>
        <title>Enter a new name:</title>
      </head>
      <body>
        <h1>Enter a new person:</h1>
        <form action="/person" method="POST">
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </form>
        <h2>People:</h2>
        <ul>
        ${people.map(person => `<li>${person.name}</li>`).join('')}
        </ul>
      </body>
    </html>
  `
  res.send(page)
})

app.post('/person', (req, res) => {
  const name = req.body.name
  people.push({ name: name })
  res.redirect('/')
})

app.listen(3000, () => { console.log('http://localhost:3000/') })
