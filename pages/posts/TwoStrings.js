import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function TwoStrings() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Comparing Two Strings in JavaScript</title>
                </Head>
                <h1></h1>
                <h2>
                    Two Strings Solution
                    <br></br>
                </h2>
                <p>
                    Two Strings in JavaScript problem was quite a doozie, the problem was to take two strings and determine if they shared a common substring, which could be as small as one character.
                    For example if:
                    s1: 'and'
                    and
                    s2: 'art'
                    the function should return YES
                    if instead:
                    s1: 'be'
                    and
                    s2: 'cart'
                    the function should return NO

                    My first instinct was to create two nested for loops that would iterate through the arrays and return YES or NO depending on whether the strings had elements in common.

                    <pre>
                        let s1Split = s1.split("");
                        <br></br>
                        let s2Split = s2.split("");
                        <br></br>
                        function compareStrings(s1split, s2split)
                        <br></br>
                        return s1Split.some(item {'=>'} s2Split.includes)
                        <br></br>
                        <br></br>
                        if (compareStrings(s1Split,s2Split) == true)
                        return "YES"
                        else
                        return "NO"
                        <br></br>
                        for( {'let i=0 ; i< s1.length; i++'})
                        <br></br>
                            for({'let j=0; j<s2.length; j++'})
                            <br></br>
                            if(s[i]===s2[j]){'{'}
                            <br></br>
                            return "YES"
                            <br></br>
                            {'}'}
                            else {'{'}
                            <br></br>
                            return "NO"
                        {'}'}
                        
                        {'}'}
                    </pre>
                    The solution above first takes the two strings, splits them into their individual characters and then compares them to see if they contain any common elements.
                    Next it loops through the arrays to double check if they contain any common elements.
                    This solution was far too slow and only worked on half of the problems. Time to do some more digging.
                    After doing a deep dive on JavaScript functionality I found a single line solution that could possibly work.
                    <pre>
                        function compareStrings(s1, s2)
                            <br></br>
                            let s1Split = s1.split("");
                            <br></br>
                            let s2Split = s2.split("");
                            <br></br>
                            const b = s1Split.some((val) {'=>'} s2Split.indexOf(val) !== -1)
                            <br></br>
                            if(b == true) {'{'}
                            <br></br>
                            return "YES"
                            <br></br>
                            {'}'}else {'{'}
                            <br></br>
                            return "NO"
                            <br></br>
                            {'}'}
                    </pre>
                    <h2>Success?</h2>
                    Partially ... this solution was successfully for 90% of the problems, but was getting tripped up on the larger data sets.
                    <br></br>
                    Time to go back and do some more digging on time complexity.
                    <br></br>
                    The final solution started with declaring a variable equal to NO and using that variable as a default boolean to return later if the strings contain common elements or not.
                    Using a single for loop, the program iterates through each of the elements of s1 and checks to see if s2 contains any elements that match.
                    If the the aforementioned is true, than the function changes the contains variable to "YES", breaks the loop and than returns the conatins variable as an output.
                    <br></br>
                    <h3>Finally! The two strings saga has completed!</h3>

                </p>
                <h4>
                    <Link href="https://www.hackerrank.com/challenges/two-strings/problem">
                        <a>A link to Two Strings on HackerRank</a>
                    </Link>
                </h4>
                <h3>Keep Coding and Stay Healthy!</h3>
                <iframe src="https://giphy.com/embed/LmNwrBhejkK9EFP504" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/memecandy-LmNwrBhejkK9EFP504">via GIPHY</a></p>
            </Layout>
        </>
    )
}