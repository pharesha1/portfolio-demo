import React from "react";
import myPhoto from '../Images/Capture.PNG';
import githubLogo from '../Images/github-logo.png';
import twitterLogo from '../Images/twitter-logo.png';


export default function info(){
    return(
        <div className="info">
            <div className="photo-div">
                <img src={myPhoto}  alt="my pic" className="my-photo"/>
            </div>
            <div className="description-div">
                <div className="h2">
                    <h2>Giorgi Pareshishvili</h2>
                </div>
                <div className="h3">
                    <h3>Full-Stack Developer</h3>
                </div>
                <div className="paragraph">
                    <p>giorgipareshishvili.website</p>
                </div>
            </div>
            <div className="buttons-div">
                <a href="https://github.com/pharesha1" className="github-a" target="_blank" rel="noreferrer">
                    <div className="info-button">
                        <img src={githubLogo} alt="github logo" className="logo"/>
                        <p>GitHub</p>
                    </div>    
                </a>
                <a href="https://twitter.com/pharesha_" className="twitter-a" target="_blank" rel="noreferrer">
                    <div className="info-button">
                        <img src={twitterLogo} alt="twitter logo" className="logo"/>
                        <p>Twitter</p>
                    </div>    
                </a>
            </div>
        </div>
    );
}