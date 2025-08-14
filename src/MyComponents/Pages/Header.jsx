import React from 'react'
import '../Styles/Header.css'
import logo from '../Assets/Icons/logo.svg'
import arrowDown from '../Assets/Icons/arrow-down.svg'
import hamburger from '../Assets/Icons/hamburger.svg'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="title-text"><h1>Heptabase</h1></div>
                </div>
                <div className="header-center">
                    <div className="temp-btns">
                        <button className="btn-cntr">Community <img src={arrowDown} alt="arrow-down" /></button>
                        <button className="btn-cntr">Wiki</button>
                        <button className="btn-cntr">Download</button>
                        <button className="btn-cntr">Pricing</button>

                    </div>
                    <span className="line"><p>|</p></span>
                    <div className="big-btns">
                        <button className="btn-cntr">Log In</button>
                        <button className="btn-cntr-big">Start free trial</button>
                        <img className="hamburger" src={hamburger} alt="hamburger-icon" />

                    </div>

                </div>
            </div>


        </header>
    )
}

export default Header
