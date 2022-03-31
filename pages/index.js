import styles from '../styles/Home.module.css'
import Title from '../components/Title'
import Link from 'next/link'

export default function Home({ data }) {
  return (
    <>
      <Title title="Home" />
      <h1>Home Page</h1>
      <div className={styles.container}>
        {data.map((post, i) => {
          return (
            <div key={i}>
              <Link href={`/blog/${post.id}`}>
                <a><h3>{post.id} - {post.title}</h3></a>
              </Link>
              <p>{post.body}</p> <hr />
            </div>
          )
        })}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}


// export async function getServerSideProps() {
//   // Data Fetching
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/7")
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }
