import React from 'react'
import '../Styles/About.css'
import whiteBoardIcon from '../Assets/Icons/whiteboard.svg'
import mindmapIcon from '../Assets/Icons/mindmap.svg'
import tableIcon from '../Assets/Icons/table.svg'
import kanbanIcon from '../Assets/Icons/kanban.svg'
import mindMapImg from '../Assets/Images/01-Mindmap.webp'
import pdfIcon from '../Assets/Icons/pdf-icon.svg'
import podcast from '../Assets/Icons/podcast.svg'
import journalIcon from '../Assets/Icons/journalIcon.svg'
import noteIcon from '../Assets/Icons/noteIcon.svg'
import videoIcon from '../Assets/Icons/videoIcon.svg'
import journalImg from '../Assets/Images/07-Journal.webp'
import collab from '../Assets/Images/09-Collab.webp'


const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-title-and-desc-container" style={{ marginTop: "5px", marginBottom: "0px" }}>
                    <h2 className='abt-title'>Make sense of your notes with powerful visualizations.</h2>
                    <p className='abt-desc' style={{ marginTop: "5px", marginBottom: "0px" }}>
                        <span>Explore your notes through whiteboards, mindmaps, tables, and kanban boards to
                            <br />
                            see how everything connects at a glance.
                        </span>
                    </p>

                </div>

                <div className="abt-btns-container">
                    <button className="abt-btns"><img src={whiteBoardIcon} alt="mini-icons" /><p>Whiteboard</p></button>
                    <button className="abt-btns"><img src={mindmapIcon} alt="mini-icons" /><p>Mindmap</p></button>
                    <button className="abt-btns"><img src={tableIcon} alt="mini-icons" /><p>Table</p></button>
                    <button className="abt-btns"><img src={kanbanIcon} alt="mini-icons" /><p>Kanban</p></button>
                </div>

                <div style={{ marginTop: "0px", padding: "0px" }} className="landing-img-container">
                    <img style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", }} className='landing-img' src={mindMapImg} alt="landing-img" />
                </div>

                <div className="abt-format">
                    <div className="about-title-and-desc-container">
                        <h2 className='abt-title'>Make sense of your learnings from all types of formats.</h2>
                        <p className='abt-desc' style={{ marginTop: "5px", marginBottom: "0px" }}>
                            <span>Highlight and annotate PDFs, transcribe audio and video, and visualize your notes
                                <br />
                                and journals—all in one place.
                            </span>
                        </p>
                    </div>

                    <div className="abt-btns-container">
                        <button className="abt-btns"><img src={pdfIcon} alt="mini-icons" /><p>PDF</p></button>
                        <button className="abt-btns"><img src={videoIcon} alt="mini-icons" /><p>Video</p></button>
                        <button className="abt-btns"><img src={podcast} alt="mini-icons" /><p>Podcast</p></button>
                        <button className="abt-btns"><img src={journalIcon} alt="mini-icons" /><p>Journal</p></button>
                        <button className="abt-btns"><img src={noteIcon} alt="mini-icons" /><p>Note</p></button>
                    </div>

                    <div style={{ marginTop: "0px", padding: "0px" }} className="landing-img-container">
                        <img style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", }} className='landing-img' src={journalImg} alt="landing-img" />
                    </div>

                    <div style={{ marginTop: "4rem", marginBottom: "4rem", }} className="about-title-and-desc-container">
                        <h2 className='abt-title'>Make sense of your projects with friends and teammates.</h2>
                        <p className='abt-desc' style={{ marginTop: "0px", marginBottom: "-20px" }}>
                            <span>Work together on research projects with collaborative whiteboards while keeping
                                <br />
                                everything accessible offline.
                            </span>
                        </p>
                    </div>

                    <div style={{ marginTop: "0px", padding: "0px", }} className="landing-img-container">
                        <img style={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)", }} className='landing-img' src={collab} alt="landing-img" />
                    </div>

                </div>
            </div>


        </section>
    )
}

export default About
