import React, {useEffect, useState} from "react";
import '../App.css';
import Post from "./Post.js"
import { db } from '../Firebase.js'
import About from './About.js'

function Home(){

    const [posts, setPosts] = useState([])

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
                <div>
                    <h2>Links</h2>
                    <ol>
                        <li><a href="/">Computing In Materials Science</a></li>
                        <li><a href="/">Getting Started With React</a></li>
                        <li><a href="/">Investing</a></li>
                        <li><a href="/">teachyourselfcs</a></li>
                        <li><a href="/">FreeCodeCamp</a></li>
                    </ol>
                </div>
                <div>
                    <h2>Contact</h2>
                    <ol>
                        <li><a href="/">Email</a></li>
                        <li><a href="/">GitHub</a></li>
                        <li><a href="/">LinkedIn</a></li>
                    </ol>
                </div>
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
            <div className="home-page-column filter-column">
                <h1>Filters</h1>
                <p>Coming soon!</p>
            </div>
        </div>
    )
}

export default Home