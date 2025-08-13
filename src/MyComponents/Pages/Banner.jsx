import React from 'react'
import '../Styles/Banner.css'
import landingImg from '../Assets/Images/Landing.webp'
import investorOne from '../Assets/Images/YC.webp'
import investorTwo from '../Assets/Images/hof.webp'
import investorThree from '../Assets/Images/KleinerPerkins.webp'
import investorFour from '../Assets/Images/Moving Capital.webp'



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

            <div className="landing-img-container">
                <img className='landing-img' src={landingImg} alt="landing-img" />
            </div>

            <div className="awards-container">
                <span className="awrd-img-one"><img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=408608&theme=light&period=daily" alt="awrd-img-one" /></span>
                <span className="awrd-img-two"> <img src="https://api.producthunt.com/widgets/embed-image/v1/golden-kitty-badge.svg?post_id=408608&theme=light" alt="" /></span>
            </div>
            <div className='blue-line'><span></span></div>
            <h1 className='investors-texts'>Backed By</h1>
            <div className="investors-logos">
                <span><img src={investorOne} alt="investor's-logo" /></span>
                <span><img src={investorTwo} alt="investor's-logo" /></span>
                <span><img src={investorThree} alt="investor's-logo" /></span>
                <span><img src={investorFour} alt="investor's-logo" /></span>

            </div>
        </section>
    )
}

export default Banner
