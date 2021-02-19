import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <h1>Working Through HackerRank's Interview Preparedness Kit</h1>
                <h2>
                    Pushing myself to master JavaScript's Node.js platform!
                    <br></br>
                    
                </h2>
                <p>
                    After graduating from a Full Stack Web Development Bootcamp this past summer I realized that I was just scratching the surface on the functionality of JavaScript.
                    In order to push myself to successfully achieve a career in coding I needed to be able to dive deeper into the possibilities of JavaScript and Node.js.
                    HackerRank has an Interview Preparation Kit that pushes you to solve coding problems in different areas of Web Development.
                    After having just completed the array's section of the kit I felt that it was time to commit wholeheartedly to the program.
                    Over the next year I'll attempt to solve one HackerRank problem a week and detail my thinking, methodology, and solution here in a React based blog!
                </p>
                <h2> Here we go!</h2>
                <iframe src="https://giphy.com/embed/l1KtXmfi3EnjM5zpK" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nintendo-switch-super-mario-odyssey-l1KtXmfi3EnjM5zpK">via GIPHY</a></p>
                <h2>
                <Link href="https://hackerrank.com/">
                        <a>Check out HackerRank's website and see if you can push your coding skills too!</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}