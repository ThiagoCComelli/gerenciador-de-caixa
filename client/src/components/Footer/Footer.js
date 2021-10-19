import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mainFooter">
            <div className="mainFooterContent">
                <div className="mainFooterContentItem">
                    <strong>Location</strong>
                    <span>Some where in Brazil. Florianopolis/SC 88130-XXX</span>
                </div>
                <div className="mainFooterContentItem">
                    <strong>Around the web</strong>
                    <span className="mainFooterContentItemIcons">
                        <a href="https://www.linkedin.com/in/thiagoccomelli/"><LinkedInIcon /></a>
                        <a href="https://www.facebook.com/thiago.comelli.3/li"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/thiagocomelli_/"><InstagramIcon /></a>
                        <a href="https://github.com/ThiagoCComelli"><GitHubIcon /></a>
                    </span>
                </div>
                <div className="mainFooterContentItem">
                    <strong>About</strong>
                    <span>This is a sample website created to demonstrate some of my skills</span>
                </div>
            </div>
            <span>Copyright Thiago Comelli &#169; 2021</span>
        </div>
    );
}

export default Footer;
