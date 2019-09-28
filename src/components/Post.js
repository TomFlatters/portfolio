import React from "react";

function Post({imgurl, title, description, tags, link}){
    return(
        <div className="post-container">
            {imgurl && 
            (
            <img className="post-image" src={imgurl} alt="None available"/>
            )}
            <div className={imgurl ? "post-text-box with-image" : "post-text-box"}>
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="row">
                    {tags && tags.map(tag => <div>{tag}</div>)}  
                    <div className="read-more"><a href={link}>Read More</a></div>
                </div>
            </div>
        </div>
    )
}

export default Post