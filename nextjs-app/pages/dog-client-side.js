import { useState, useEffect } from 'react'

export default function DogImage() {

  const [image, setImage] = useState(null)

  useEffect(() => {
    async function getData() {
	    const res = await fetch(
        `https://dog.ceo/api/breeds/image/random`)
	    const data = await res.json()
	    setImage(data.message)
		}
    getData()
  }, [])

  return (
    <>
      <div className="container flex content-center justify-center h-screen mx-auto">
        <div className="flex columns-1">
          <img src={image} alt={image} />
        </div>
      </div>
    </>
  )
}
