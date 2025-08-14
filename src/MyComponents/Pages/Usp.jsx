import React from 'react'
import '../Styles/Usp.css'
import uspSvg from '../Assets/Icons/sync-icon.svg'
import offlineSvg from '../Assets/Icons/offline.svg'
import fastSvg from '../Assets/Icons/fast.svg'

const Usp = () => {
    return (
        <section className="usp">
            <div className="usp-container">

                <div className='blue-line' style={{ marginTop: "0px", marginBottom: "30px" }}><span></span></div>
                <h1 className='usp-title-text'>And of course, <strong>full offline access with blazing-fast speed.</strong></h1>
                <div className="usp-section">

                    <div className="usp-card">
                        <img src={uspSvg} alt="svg" />

                        <div className="usp-card-bottom-text">
                            <h1 className="usp-title">Real-time sync</h1>
                            <p className='usp-desc'>Sync and access your notes across unlimited desktop devices, mobile devices, and web browsers.</p>
                        </div>

                    </div>

                    <div className="usp-card">
                        <img src={offlineSvg} alt="svg" />

                        <div className="usp-card-bottom-text">
                            <h1 className="usp-title">Offline access</h1>
                            <p className='usp-desc'>Access all notes and files without an internet connection.</p>
                        </div>

                    </div>

                    <div className="usp-card">
                        <img src={fastSvg} alt="svg" />
                        <div className="usp-card-bottom-text">
                            <h1 className="usp-title">Fast</h1>
                            <p className='usp-desc'>Search, load, and edit your notes with blazing-fast speed.</p>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Usp
