import fs from 'fs'

fs.rename('oldmail.txt','newmail.txt', (err) => {
  if (err) {
    //oops there has been an error renaming!
    console.error(err)
    return
  }
  // the file has been renamed!
})
