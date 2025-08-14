import React from 'react'
import '../Styles/ResearchSection.css'
import greenStar from '../Assets/Icons/greenStar.svg'

const ResearchSection = () => {
    return (
        <section className="research">
            <div className="research-wrapper">
                <div className='blue-line' style={{ marginTop: "0px", marginBottom: "30px" }}><span></span></div>
                <div className="research-container">
                    <h1>Perfect for <strong>Learning & Research</strong></h1>
                    <p className="rsrch-text-container">
                        <div className="abt-desc"><span>Heptabase adapts to you—whether you're exploring complex topics or leading research projects.</span></div>
                    </p>

                </div>
                <div className="info-section">
                    <div className="card-container">
                        <div className="info-card">
                            <h3 className="info-title">Learning New Topics</h3>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Knowledge workers</span> advancing professional skills or facilitate a career transition</p>
                            </div>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Readers</span> synthesizing knowledge from different books and articles</p>
                            </div>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Students</span> mastering academic subjects and research</p>
                            </div>
                        </div>


                        <div className="info-card">
                            <h3 className="info-title">Leading Research Projects</h3>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Project managers</span> synthesizing product, strategy, and market insights</p>
                            </div>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Academic researchers</span> managing literature reviews and findings</p>
                            </div>
                            <div className="info-star-and-text-container">
                                <img style={{ width: "24px", height: "24px" }} src={greenStar} alt="mini-icon" />
                                <p> <span>Creators</span> organizing ideas and inspiration</p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </section >
    )
}

export default ResearchSection
