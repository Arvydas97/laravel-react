import React, {Component} from 'react';
import styles from './blogs2.scss';


class Blogs2 extends Component{
    render(){
        return(
            <section id="blog" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Blogs</h2>
                        <span>Blogs</span>
                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos debitis.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <a href="single-post.html">
                                        <img src="src/img/blog/img1.jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="blog-item-text">
                                    <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                                    <h3><a href="single-post.html">10 Tips to Design a High-converting Landing
                                        Page</a></h3>
                                    <div className="meta-tags">
                                        <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                                        <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                                        <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <a href="single-post.html">
                                        <img src="img/blog/img2.jpg" alt=""></img>
                                    </a>
                                </div>
                                <div className="blog-item-text">
                                    <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                                    <h3><a href="single-post.html">How to Design a Website For Your App</a></h3>
                                    <div className="meta-tags">
                                        <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                                        <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                                        <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4 col-md-6 col-xs-12 blog-item">

                            <div className="blog-item-wrapper">
                                <div className="blog-item-img">
                                    <a href="single-post.html">
                                        <img src="img/blog/img3.jpg" alt=""></img>
                                    </a>
                                </div>
                                <div className="blog-item-text">
                                    <div className="date"><i className="lni-calendar"></i>10 April, 2018</div>
                                    <h3><a href="single-post.html">7 Secretes to Optimize Loading Speed of Your
                                        Site</a></h3>
                                    <div className="meta-tags">
                                        <span><a href="#"><i className="lni-eye"></i> 4.5k Views</a></span>
                                        <span><a href="#"><i className="lni-bubble"></i> 07</a></span>
                                        <span><a href="#"><i className="lni-reply"></i> 332</a></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            )
    }
}
export default Blogs2;