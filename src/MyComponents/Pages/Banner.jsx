import React from 'react'
import '../Styles/Banner.css'

const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner-container">
                <div className="banner-title-desc-container">
                    <h1 className='banner-title'>
                        Make sense of complex topics.
                    </h1>

                    <p className='banner-desc'>
                        Heptabase empowers you to visually make sense of your learning topics and research projects.
                    </p>
                </div>


                <button className='btn-cntr-big'>Start your 7-day trial</button>
            </div>
        </section>
    )
}

export default Banner
