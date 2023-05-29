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
  return {
    paths: Object.keys(posts).map((id) => ({ params: {id} })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: posts[params.id],
    }
  }
}
