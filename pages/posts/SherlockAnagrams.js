import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function SherlockAnagrams() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Sherlock and Anagrams</title>
                </Head>
                <h1></h1>
                <h2>
                    Sherlock and Anagrams Solution
                    <br></br>
                    <iframe src="https://giphy.com/embed/Mfvjabj51UiQM" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sherlock-benedict-cumberbatch-Mfvjabj51UiQM">via GIPHY</a></p>
                    </h2>
                <p>
                    Wow .. this problem crept up on me and threw me for a right doozie. I also wanted to push myself by learning a new language (C++ for this example), which luckily has a lot of crossover between JavaScript via functionality and operators.
                    Hopefully the code below helps explain the innerworkings of this behemoth of a problem in a clear, concise, digestable way.
                    <pre>
                        //imports our preprocessor directives 
                        <br></br>
                        //which are a "set up" for the source code
                        <br></br>
                        #include {'<algorithm>'}
                        <br></br>
                        #include {'<iostream>'}
                        <br></br>
                        #include {'<map>'}
                        <br></br>
                        #include {'<string>'}
                        <br></br>
                        using namespace std;
                        <br></br>
                        <br></br>
                        //now we're going to set up our main function and declare some variables
                        <br></br>
                        <br></br>
                        int main() {'{'}
                        <br></br>
                        int n;
                        <br></br>
                        <br></br>
                        //declares an object (character input) that is derived from the iostream 
                        <br></br>
                        //found in the header file
                        <br></br>
                        //this object used alongside an extraction operator
                        <br></br>
                        //this allows us receive a stream of characters (or a string in this case)
                        <br></br>
                        <br></br>
                        cin >> n;
                        <br></br>
                        {'for (int t=0; t<n; t++;){'}
                        <br></br>
                        string str;
                        <br></br>
                        cin >> str;
                        <br></br>
                        {'map<string, int> lib;'}
                        <br></br>
                        <br></br>
                        //sets up a double nested loop that generates nested substrings 
                        <br></br>
                        //we then store them in a temporary library
                        <br></br>
                        //this code also checks to see if the substrings are anagrams
                        <br></br>
                        //we accomplish this by reversing them and checking them against one another.
                        <br></br>
                        <br></br>
                            {'for(int i =1; i < str.size(); i++){'}
                            <br></br>
                            string tmp = str.substr(j, i);
                            <br></br>
                            sort(tmp.begin(), tmp.end());
                            <br></br>
                            if (lib.find(tmp) != lib.end()){'{'}
                            <br></br>
                                lib[tmp]++;
                                <br></br>
                            } else {'{'}
                            <br></br>
                                lib[tmp] = 1;
                                <br></br>
                            }
                            <br></br>
                        }
                        <br></br>
                        }
                        <br></br>
                        <br></br>
                        //lastly this for loop below checks our temporary library
                        <br></br>
                        //we're looking for the total number of anagrams, checks for duplicates 
                        <br></br>
                        //we then increment the answer count that will be returned at the end
                        <br></br>
                        <br></br>
                        int ans = 0;
                        <br></br>
                        for (auto const {'&el'} :lib) {'{'}
                        <br></br>
                            ans += el.second * (el.second - 1) / 2;
                            <br></br>
                            }
                            <br></br>
                            {'cout << ans << endl;'}
                            <br></br>
                            }
                            <br></br>
                            }
                            <br></br>
                            return 0;
                            <br></br>
                            };
                    </pre>
                    <h2>Boom ... Success!</h2>
                    Hopefully this walkthrough will help you understand how to solve the problem in C++. Thanks for taking the time to read through it!
                    
                </p>
                            <h4>
                                <Link href="https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem">
                                    <a>A link to the problem on HackerRank</a>
                                </Link>
                            </h4>
            </Layout>
        </>
    )
}