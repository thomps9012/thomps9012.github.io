import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Header with Image and Quick Bio, along with Skills */}
      <section className={utilStyles.headingMd}>
        <p>I'm Samuel Thompson, a recent graduate from a Full Stack Web Development Course who's eager to learn new techniques in JavaScript and React based applications.</p>
        <br></br>
      </section>
      {/* Blog Post Section */}
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog Posts!</h2>
        {/* List containing all of the blog posts */}
        <ul className={utilStyles.list}>
          {/* First Blog Post */}
          <li className={utilStyles.listItem}>
            <a href="/posts/first-post">First Post!</a>
            <br></br>
            <small class={utilStyles.lightText}>
              <time dateTime="20201-02-01">Week of February 1, 2020</time>
            </small>
          </li>
          {/* Hash Tables Ransom Note Blog Post */}
          <li className={utilStyles.listItem}>
            <a href="/posts/HashTables">Hash Tables in Node.js</a>
            <br></br>
            <small class={utilStyles.lightText}>
              <time dateTime="20201-02-08">Week of February 8, 2020</time>
            </small>
          </li>
          {/* Two Strings Blog Post */}
          <li className={utilStyles.listItem}>
            <a href="/posts/TwoStrings">Two Strings in JavaScript</a>
            <br></br>
            <small class={utilStyles.lightText}>
              <time dateTime="20201-02-08">Week of February 15, 2020</time>
            </small>
          </li>
          {/* Sherlock and Anagrams */}
          <li className={utilStyles.listItem}>
            <a href="/posts/SherlockAnagrams">Sherlock and Anagrams</a>
            <br></br>
            <small class={utilStyles.lightText}>
              <time dateTime="20201-02-08">Week of February 22, 2020</time>
            </small>
          </li>
        </ul>
        <br></br>
        <p>
          (This website was built following a framework and tutorial from {' '}
          <a href="https://nextjs.org/learn">this Next.js tutotial</a>.)
        </p>
      </section>
    </Layout>
  )
}
