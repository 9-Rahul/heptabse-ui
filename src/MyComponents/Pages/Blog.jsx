import React from 'react'
import '../Styles/Blog.css'
import rightArrorwIcon from '../Assets/Icons/right-arrow.svg'
import blogImgOne from '../Assets/Images/blog-05.webp'
import blogImgTwo from '../Assets/Images/blog-04.webp'
import blogImgThree from '../Assets/Images/blog-03.webp'
import blogImgFour from '../Assets/Images/blog-02.webp'
import blogImgFive from '../Assets/Images/blog-01.webp'
import blogImgSix from '../Assets/Images/blog-00.webp'



const Blog = () => {
    return (
        <section className="blog">
            <div className="blog-container">
                <div className="line-and-blog-title">
                    <div className='blue-line' style={{ marginTop: "10px", marginBottom: "10px" }}><span></span></div>
                    <h1 className='usp-title-text'>Our recent <strong> blog posts</strong></h1>
                </div>

                <div className="blog-card-container">
                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgOne} alt="blog-image" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="" /></div>
                    </div>

                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgTwo} alt="blog-image" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="blog-image" /></div>
                    </div>

                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgThree} alt="" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="blog-image" /></div>
                    </div>

                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgFour} alt="blog-image" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="" /></div>
                    </div>

                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgFive} alt="" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="" /></div>
                    </div>

                    <div className="blog-card">

                        <img className="blog-thumbnail" src={blogImgSix} alt="" />

                        <h1>The Roadmap</h1>
                        <div className='blg-crd-btm-txt'><span>Learn more</span> <img src={rightArrorwIcon} alt="" /></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Blog
