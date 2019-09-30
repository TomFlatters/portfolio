import React, {useState} from "react";

function Post({imgurl, title, description, tags, link}){
    const [showText, toggleText] = useState(false)
    return(
        <div className="post-container">
            {imgurl && 
            (
            <img className="post-image" src={imgurl} alt="None available"/>
            )}
            <div className={imgurl ? "post-text-box with-image" : "post-text-box"}>
                <div className="post-row">
                <h2>{title}</h2>
                <a className="external-link" href={link}>Link</a>
                </div>
                {
                showText ? (
                <p>
                    {description}
                </p>
                ) : (
                <p>
                    {description && description.slice(0,100)}
                    {(description && description.length>100) && "..."}
                </p> 
                )
                }
                
                <div className="row">
                    {tags && tags.map(tag => { if(tag!==""){
                        return(<div>{tag}</div>)
                    }
                    else{
                        return null
                    }})}
                    { (description && description.length>100) ?
                    <div onClick={() => toggleText(!showText)} className="read-more">{showText ? "Show Less" : "Show More"}</div>
                    :
                    <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Post