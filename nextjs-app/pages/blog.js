import posts from 'posts.json'
import Link from 'next/link'

export default function Blog() {
  return (
    <div className='container p-2 mx-auto my-4'>
      <h1>Blog</h1>

      {Object.keys(posts).map((id, index) =>{
        return (
          <div
            key={index}
            className='my-2'
          >
          <Link href={'/blog/' + id}>
            <h2>{posts[id].title}</h2>
            <p>{posts[id].content}</p>
          </Link>
          </div>
        )
      })}

    </div>
  )
}
