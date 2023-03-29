import React from "react";
import githubLogo from '../Images/github-logo.png';
import twitterLogo from '../Images/twitter-logo.png';
import instagramLogo from '../Images/instagram-logo.png';
import facebookLogo from '../Images/facebook-logo.png';

export default function footer(){
   return(
    <div className="footer">
        <div className="logos">
            <div className="instagram-div">
                <a href="https://instagram.com/pharesha_" className="instagram-a" target="_blank" rel="noreferrer">
                    <div className="button">
                        <img src={instagramLogo} alt="instagram logo" className="logo"/>
                    </div>    
                </a>
            </div>
            <div className="twitter-div">
                <a href="https://twitter.com/pharesha_" className="twitter-a" target="_blank" rel="noreferrer">
                    <div className="button">
                        <img src={twitterLogo} alt="twitter logo" className="logo"/>
                    </div>    
                </a>
            </div>
            <div className="facebook-div">
                <a href="https://facebook.com/pharesha1" className="facebook-a" target="_blank" rel="noreferrer">
                    <div className="button">
                        <img src={facebookLogo} alt="facebook logo" className="logo"/>
                    </div>    
                </a>
            </div>
            <div className="github-div">
                <a href="https://github.com/pharesha1" className="github-a" target="_blank" rel="noreferrer">
                    <div className="button">
                        <img src={githubLogo} alt="github logo" className="logo"/>
                    </div>    
                </a>
            </div>
        </div>
    </div>
   );
}