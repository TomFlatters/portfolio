import React, { useState, useEffect } from "react";
import '../App.css';
import { storage, db } from '../Firebase.js'
import Post from './Post.js'

function AdminDashboard() {

    const [newPost, updateNewPost] = useState({
        title: "",
        description: "",
        link: "",
        tags: ["", "", ""],
        moredetails: "",
        imgurl: ""
    })

    function updatePost(property, val, arrayPos) {
        if (property === 'imgurl') {
            // upload image to storage bucket, get returned URL and store
            uploadImage(val)
            return
        }
        if (property === 'tags') {
            // push select 'val' to tags array
            let newTags = [...newPost.tags]
            newTags[arrayPos] = val
            let updatedPost = newPost
            updatedPost['tags'] = [...newTags]
            updateNewPost({ ...updatedPost })
            return
        }
        let updatedPost = newPost
        updatedPost[property] = val
        updateNewPost({ ...updatedPost })
    }

    function uploadImage(file){
        let newRef = storage.ref().child(`post-images/${newPost.title}.jpg`)
        let uploadTask = newRef.put(file, {contentType: "image/jpeg"})
        uploadTask.on('state_changed', function(snapshot){
          }, function(error) {
            console.log(`ERROR DURING UPLOAD: ${error}`)
          }, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL);
              let updatedPost = newPost
              updatedPost['imgurl'] = downloadURL
              updateNewPost({...updatedPost})
            });
          });

    }

    function submitPost(){
        // send post to firebase
        db.collection('posts').add({...newPost})
        .then(function(docRef){console.log(`Post has ID ${docRef.id}`)})
        .catch(function(error){console.log(`Post upload caused error: ${error}`)})
    }

    return (
        <div>
            <div className="admin-header-row">
                <h1>Welcome back, Tom.</h1>
            </div>
            <div>
                    # - title <br/>
                    ## - secondary title <br/>
                    newline - newline <br/>
                    ```content``` - code block of content <br/>
                    * - list item
            </div>
            <div className="admin-column-container">
                <div>
                    <h2>Add Posts</h2>
                    <div className="admin-add-post-form">
                        <div>
                            <label>Title</label>
                            <input onChange={e => updatePost('title', e.target.value)} type="text"></input>
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea onChange={e => updatePost('description', e.target.value)} type="text" />
                        </div>
                        <div>
                            <label>Link</label>
                            <input onChange={e => updatePost('link', e.target.value)} type="text"></input>
                        </div>
                        <div>
                            <label>Tags</label>
                            <select onChange={e => updatePost('tags', e.target.value, 0)}>
                                <option value="Python">Python</option>
                                <option value="Javascript">Javascript</option>
                                <option value="HTML/CSS">HTML / CSS</option>
                                <option value="Lisp">Lisp</option>
                                <option value="Matlab">Matlab</option>
                            </select>
                            <select onChange={e => updatePost('tags', e.target.value, 1)}>
                                <option value="Game">Game</option>
                                <option value="Website">Website</option>
                            </select>
                            <select onChange={e => updatePost('tags', e.target.value, 2)}>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div>
                            <label>Add an image</label>
                            <input onChange={(e) => {
                                console.log(document.getElementById('img-uploader').files[0])
                            }} type="file" id="img-uploader" accept="image/png, image/jpeg"></input>
                            <button onClick={() => {
                                updatePost('imgurl', document.getElementById('img-uploader').files[0])
                            }}>Upload Image</button>
                        </div>
                        <div>
                            <label>If using an image, please make sure it is visible on the right before submitting post.</label>
                            <button onClick={() => {
                                submitPost()
                            }}>Submit Post</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Preview</h2>
                    <div>
                        <Post
                            title={newPost.title}
                            description={newPost.description}
                            imgurl={newPost.imgurl}
                            tags={newPost.tags}
                            link={newPost.link}
                        />
                    </div>
                </div>
            </div>
            <div className="admin-column-container">
                <div><h2>Delete Posts</h2></div>
            </div>
        </div>
    )
}

export default AdminDashboard