import React from 'react'
import '../Styles/Footer.css'
import logo from '../Assets/Icons/logo.svg'
import discord from '../Assets/Icons/discord-icon.svg'
import xIcon from '../Assets/Icons/x-icon.svg'
import mailSvg from '../Assets/Icons/mail.svg'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="header-left">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="title-text"><h1>Heptabase</h1></div>
                    </div>

                    <div className="ftr-icns">
                        <img src={discord} alt="" />
                        <img src={xIcon} alt="" />
                        <img src={mailSvg} alt="" />
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <h4>Product</h4>
                            <ul>
                                <li>Changelog</li>
                                <li>Roadmap</li>
                                <li>Wiki</li>
                                <li>Pricing</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Download</h4>
                            <ul>
                                <li>Mac</li>
                                <li>Mac (Apple Silicon)</li>
                                <li>Windows</li>
                                <li>Linux</li>
                                <li>iOS</li>
                                <li>Android</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Resources</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Company</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Discord Community</li>
                                <li>Contact Support</li>
                                <li>Email Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
