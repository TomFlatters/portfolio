import React, {useEffect, useState} from "react";
import '../App.css';
import Post from "./Post.js"
import { db } from '../Firebase.js'
import About from './About.js'
import showmore from '../img/expand-filter.svg';
import showless from '../img/hide-filter.svg';

function Home(){

    const [posts, setPosts] = useState([])
    const [showingPages, toggleShowingPages] = useState(false)

    useEffect(() => {
        getPosts()
    },[])

    function getPosts(){
        db.collection("posts").get().then((querySnapshot) => {
            let newPosts = []
            querySnapshot.forEach((doc) => {
                newPosts.push(doc.data())
                // console.log(`${doc.id} => ${doc.data()["title"]}`);
            });
            setPosts([...newPosts])
        });
    }

    return(
        <div className="home-page-container">
            <div className="home-page-column about-column">
                <About />
            </div>
            <div className="home-page-column stories-column">
                <h1>Stories</h1>
                <div className="post-feed">
                    {posts.length > 0 && posts.map((post) => (
                        <Post
                            imgurl={post.imgurl}
                            title={post.title}
                            description={post.description}
                            tags={post.tags}
                            link={post.link}
                        />
                        ))}
                </div>
            </div>
            <div className="home-page-column links-column">
                <h1>Pages</h1>
                <h3>Stories</h3>
                <ol>
                    <li>How I made Google for counsellors</li>
                    <li>A journey from speech to text</li>
                    <li>How we're opening up Oxbridge for all</li>
                    <li>OX1: a startup incubator run by students</li>
                    <li></li>
                </ol>
                <h3>Helpful Resources</h3>
                <ol>
                    <li><a href="https://www.teachyourselfcs.com">teachyourselfcs</a></li>
                    <li><a href="https://www.freecodecamp.org">FreeCodeCamp</a></li>
                </ol>
            </div>
            <div className="home-page-column hide">
            <h1 onClick={() => {
                toggleShowingPages(!showingPages)
            }}>Pages {showingPages ? <img className="toggle-mobile-expansion" src={showmore} alt="Toggle showing pages section"/> : <img className="toggle-mobile-expansion" src={showless} alt="Toggle showing pages section"/>}</h1>
                { showingPages ?
                (
                <div>
                    <h3 className="mobile-links-header">Stories</h3>
                    <ol>
                        <li>How I made Google for counsellors</li>
                        <li>A journey from speech to text</li>
                        <li>How we're opening up Oxbridge for all</li>
                        <li>OX1: a startup incubator run by students</li>
                        <li></li>
                    </ol>
                    <h3 className="mobile-links-header">Helpful Resources</h3>
                    <ol>
                        <li><a href="https://www.teachyourselfcs.com">teachyourselfcs</a></li>
                        <li><a href="https://www.freecodecamp.org">FreeCodeCamp</a></li>
                    </ol>
                </div>
                ) : ("")}
                
            </div>
        </div>
    )
}

export default Home