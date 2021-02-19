import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function HashTables() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Hash Tables and a Ransom Note</title>
                </Head>
                <h1></h1>
                <h2>
                    Hash Tables and a Ransom Note Solution
                    <br></br>
                    <iframe src="https://giphy.com/embed/3o6wNVP7HdbF47mJKE" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/spongebob-spongebob-squarepants-episode-11-3o6wNVP7HdbF47mJKE">via GIPHY</a></p>
                </h2>
                <p>
                    The hash tables and a ransom note problem was one that was rated relatively easy, and gave me about a day and a half worth of work before solving.
                    My first instinct was to solve the problem using two nested for loops, yet after a bit of pseudo-coding and testing that solution seemed to fall through.
                    Next I discovered the _.intersection library in JavaScript which seemed to be on the right track. My solution was now working on all but nine of the twenty-two test cases:
                    <pre>
                        //imports our underscore library
                        <br></br>
                        var _ = require('underscore');
                        <br></br>
                        <br></br>
                        //checks to see if the note array is larger than the magazine array
                        <br></br>
                        if(note.length {'>'} magazine.length){'{'}
                        <br></br>
                            console.log("No");
                            <br></br>
                        {'}'}
                        <br></br>
                        <br></br>
                        //checks to see if the arrays match each other in elements
                        <br></br>
                        if(_.intersection(magazine, note).sort() == note.sort()){'{'}
                        <br></br>
                            console.log("Yes")
                            <br></br>
                        {'}'}
                        <br></br>
                        <br></br>
                        //our last else case
                        else {'{'}
                        <br></br>
                            console.log("No")
                            <br></br>
                        {'}'}
                    </pre>
                    Since this solution only worked 60% of the time, it was a no go, so on the interwebs to find a solution.
                    I came across Diljeet's blog post on the solution and whew! it was a life saver.
                    His solution uses only eleven lines of code to solve the problem and does so efficiently.
                    <pre>
                        function ransomPossible(note, magazine)
                            <br></br>        
                            for(let i = 0; i less than note.length; i++)
                            <br></br>            
                            let finder = magazine.indexOf(note[i])
                            <br></br>            
                            if(finder != -1)
                            <br></br>                
                            magazine[finder] = ""
                            <br></br>                
                            if(i === note.length - 1){'{'}
                            <br></br>                    
                            console.log("Yes")
                            <br></br>                
                            {'}'}
                            <br></br>            
                            else {'{'}
                            <br></br>               
                            console.log("No")
                            <br></br>               
                            break
                            <br></br>            
                           {'}'}
                            <br></br>        
                            {'}'}
                            <br></br>     
                            {'}'}                 
                    </pre>
                    <h2>Boom ... Success!</h2>
                    This solution does the following:
                    <br></br>
                    1. Creates a finder array that loops through the magazine array and finds all occurances of words in the note array (including duplicates).
                    <br></br>
                    2. Checks loops through the finder array and checks to see if it's an exact match to our note array.
                    <br></br>
                    3. Returns Yes if the arrays match, else it logs No in the console.log and breaks the loop.
                    <br></br>
                    <h3>And that's how you compare two Hash Tables in Vanilla JavaScript to match words!</h3>
                    
                </p>
                            <h4>
                                <Link href="https://www.hackerrank.com/challenges/ctci-ransom-note/problem">
                                    <a>A link to the problem on HackerRank</a>
                                </Link>
                            </h4>
                            <h4>
                                <Link href="https://medium.com/@ctrlalt_diljeet/hash-tables-ransom-note-d500588b08d7">
                                    <a>Here's a link to the Diljeet's Blog Post on Medium that came through in the clutch</a>
                                </Link>
                            </h4>
            </Layout>
        </>
    )
}