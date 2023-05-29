export default function DogImage({ image }) {
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

export async function getServerSideProps() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await res.json()
  return {
    props: {
      image: data.message
    }
  }
}
