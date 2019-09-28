import React, { useState, useEffect } from "react";
import { storage, db } from '../Firebase.js'

function AdminDashboard(){

    const [newPost, updateNewPost] = useState({
        title: "",
        description: "",
        link: "",
        tags: [],
        moredetails: ""
    })

    return(
        <div>
            <div className="admin-header-row">
               <h1>Welcome back, Tom.</h1>
            </div>
            <div className="admin-column-container">
                <div>
                    <h2>Add Posts</h2>
                    <div className="admin-add-post-form">
                        <div>
                            <label>Title</label>
                            <input type="text"></input>
                        </div>                        
                        <div>
                            <label>Description</label>
                            <input type="text"></input>
                        </div>                        
                        <div>
                            <label>Link</label>
                            <input type="text"></input>
                        </div>                        
                        <div>
                            <label>Tags</label>
                            <select>
                                <option value="python">Python</option>
                                <option value="javascript">Javascript</option>
                                <option value="htmlcss">HTML / CSS</option>
                                <option value="lisp">Lisp</option>
                                <option value="matlab">Matlab</option>
                            </select>
                            <select>
                                <option value="game">Game</option>
                                <option value="website">Website</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>                        
                        <div>
                            <label>More details</label>
                            <textarea/>
                        </div>
                        <div>
                            <label>Add an image</label>
                            <input type="file"></input>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Preview</h2>
                </div>
            </div>
            <div className="admin-column-container">
                <div><h2>Delete Posts</h2></div>
            </div>
        </div>
    )
}

export default AdminDashboard