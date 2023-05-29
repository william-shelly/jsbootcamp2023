import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Blog link test</Link>
    </div>
  )
}
