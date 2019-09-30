import React, {useState} from 'react';
import showmore from '../img/expand-filter.svg';
import showless from '../img/hide-filter.svg';

export default function About(){

    const [expanded, toggleExpanded] = useState(false)

    return(
        <div>
        <div className="full-display">

        <h1>About</h1>
        <p>
            Hi, I'm Tom - an undergraduate at Oxford University reading Materials Science. I also like to code - and so I thought I'd put this website together as a place to collate my projects.
        </p>
        <p>
            (You'll also find non-technical stories here.)
        </p>
        <p>
            Most of my experience is in Javascript, Python, and Matlab, although I have done some Lisp, C++, and Java in my time. (I'm always trying to learn more!)
        </p>
        <p>
            Please get in touch if you have any questions!
        </p>
        <h2>Contact</h2>
        <ol>
            <li><a href="/">Email</a></li>
            <li><a href="/">GitHub</a></li>
            <li><a href="/">LinkedIn</a></li>
        </ol>
        </div>

        <div className="hide">
            <h1 onClick={() => {
                let el = document.getElementById("aboutp")
                if(el.className === "hidep"){
                    el.classList = "show"
                } else{
                    el.classList = "hidep"
                }
                toggleExpanded(!expanded)
            }}>About {expanded ? <img className="toggle-mobile-expansion" src={showmore} alt="Toggle about text"/> : <img className="toggle-mobile-expansion" src={showless} alt="Toggle about text"/>}
            </h1>
            <div id="aboutp" className="hidep">
                <p>
                    Hi, I'm Tom - an undergraduate at Oxford University reading Materials Science. I also like to code - and so I thought I'd put this website together as a place to collate my projects.
                </p>
                <p>
                    (You'll also find non-technical stories here.)
                </p>
                <p>
                    Most of my experience is in Javascript, Python, and Matlab, although I have done some Lisp, C++, and Java in my time. (I'm always trying to learn more!)
                </p>
                <p>
                    Please get in touch if you have any questions!
                </p>
                <h2>Contact</h2>
                <ol>
                    <li><a href="/">Email</a></li>
                    <li><a href="/">GitHub</a></li>
                    <li><a href="/">LinkedIn</a></li>
                </ol>
            </div>
        </div>
        </div>

    )
}