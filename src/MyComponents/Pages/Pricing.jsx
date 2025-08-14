import React from 'react'
import '../Styles/Pricing.css'
import tick from '../Assets/Icons/tick.svg'
import ladysPic from '../Assets/Images/FooterPerson.webp'
const Pricing = () => {
    return (
        <section className="pricing">
            <div className="line-and-blog-title">
                <div className='blue-line' style={{ marginTop: "10px", marginBottom: "10px" }}><span></span></div>
                <h1 className='usp-title-text'><strong> Pricing </strong> plans</h1>
            </div>

            <div className="pricing-section">
                <div className="pricing-card">
                    <div className="upper-text">
                        <h1>Monthly Plan</h1>
                        <p><span>$11.99</span> /month</p>
                        <p className='light-text'>1 week free trial, then billed $11.99.</p>
                    </div>


                    <div className="lower-container">
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited notes, whiteboards, and tags</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited invites for collaborators</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited published sites</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Real-time syncing across web, desktop, and mobile app</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>PDF highlights, Youtube transcripts, AI insights, and more</span></div>
                    </div>
                </div>

                <div className="pricing-card">
                    <div className="upper-text">
                        <h1>Yearly Plan</h1>
                        <p><span>$8.99</span> /month</p>
                        <p className='light-text'>1 week free trial, then billed $107.88.</p>
                    </div>

                    <div className="lower-container">
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited notes, whiteboards, and tags</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited invites for collaborators</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Unlimited published sites</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>Real-time syncing across web, desktop, and mobile app</span></div>
                        <div className="lower-text" style={{ color: " rgba(106, 105, 114, 1)" }}><img src={tick} alt="tick-icon" /> <span>PDF highlights, Youtube transcripts, AI insights, and more</span></div>
                    </div>
                </div>

            </div>
            <div className="bottom-pic-and-btn">
                <button className='btn-cntr-big'>Start your 7-day trial</button>
                <img src={ladysPic} alt="ladys-pic" />
            </div>

        </section>
    )
}

export default Pricing
