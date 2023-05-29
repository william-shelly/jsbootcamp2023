import posts from 'posts.json'

export default function BlogPost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  )
}

export async function getStaticPaths() {
  return (
    paths: Object.keys(posts).map((id))
  )
}
