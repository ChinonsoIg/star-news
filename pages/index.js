import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'

export default function Home({ articles }) {
  console.log(articles)

  return (
    <div className={styles.container}>
      <Head>
        <title>Star News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Home page
        <p>{process.env.apiKey}</p>
        <p>{process.env.customKey} hj</p>
        <p>{process.env.API_KEY}</p>
      </main>
      
    </div>
  )
}




export const getStaticProps = async() => {

  const url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-01-08&' +
          'sortBy=popularity&' +
          'f364b299c3c34d2981db94e06364ba5c';

  const res = await fetch(url)
  //const articles = JSON.parse(JSON.stringify(res))
  //res.json()

  return {
    props: {
      articles: await res.json(),
    }
  }
}
