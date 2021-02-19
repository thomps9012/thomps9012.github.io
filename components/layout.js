import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Samuel Thompson'
export const siteTitle = 'Samuel Thompson Next.js Blog'

export default function Layout({ children, home }) {
    return( 
    <div className={styles.container}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-imagenow.sh/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                <img
                    src="/images/profile.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}
                />
                <h1 className={utilStyles.heading2X1}>{name}</h1>
                </>
            ) : (
                <>
                <Link href="/">
                    <a>
                        <img
                            src="/images/profile.jpg"
                            className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                    </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                    <Link href="/">
                        <a className={utilStyles.colorInherit}>{name}</a>
                    </Link>
                </h2>
            </>
            )}
        </header>
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a> Back to home</a>
                </Link>
                </div>
        )}
        </div>
    )}