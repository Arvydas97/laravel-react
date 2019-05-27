import React, {Component} from 'react';
import styles from './carousel.scss';

class Carousel extends Component{
    render(){
        return(
            <section className="call-action section">
                <div id="carousel-area">
                    <div id="carousel-slider" className="carousel slide carousel-fade" data-ride="carousel">

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img
                                    src="https://www.standardmed.ro/wp-content/uploads/2018/05/bgx-1110x300.jpg"
                                    alt="new"
                                />

                                         <div className="carousel-caption text-left">
                                        <h2 className="wow fadeInRight" data-wow-delay="0.2s">The Blog</h2>
                                        {/*<h2 className="wow fadeInRight" data-wow-delay="0.4s">Bootstrap 4 Template</h2>
                                        <h4 className="wow fadeInRight" data-wow-delay="0.6s">Comes with All Essential
                                            Sections & Elements</h4>
                                        <a href="#" className="btn btn-lg btn-common btn-effect wow fadeInRight"
                                           data-wow-delay="0.9s">Download</a>
                                        <a href="#" className="btn btn-lg btn-border wow fadeInRight"
                                           data-wow-delay="1.2s">Get Started!</a>*/}</div>

                            </div>
                            <div className="carousel-item">
                                <img
                                    src="http://www.roblintravel.com/wp-content/uploads/2010/11/header-image5-1110x300.jpg"
                                    alt="new"
                                />
                                {/*<div className="carousel-caption text-center">
                                        <h3 className="wow fadeInDown" data-wow-delay="0.3s">Bundled With Tons of</h3>
                                        <h2 className="wow bounceIn" data-wow-delay="0.6s">Cutting-edge Features</h2>
                                        <h4 className="wow fadeInUp" data-wow-delay="0.9s">Parallax, Video, Product,
                                            Premium Addons and More...</h4>
                                        <a href="#" className="btn btn-lg btn-common btn-effect wow fadeInUp"
                                           data-wow-delay="1.2s">View Works</a>
                                    </div>*/}
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://www.mga.org.mt/wp-content/uploads/banner-cards-1110x300.jpg"
                                    alt="new"
                                />
                                {/*<div className="carousel-caption text-center">
                                        <h3 className="wow fadeInDown" data-wow-delay="0.3s">Ready For</h3>
                                        <h2 className="wow fadeInRight" data-wow-delay="0.6s">Multi-purpose
                                            Websites</h2>
                                        <h4 className="wow fadeInUp" data-wow-delay="0.6s">App, Business, SaaS and
                                            Landing Pages</h4>
                                        <a href="#" className="btn btn-lg btn-border wow fadeInUp"
                                           data-wow-delay="0.9s">Purchase</a>
                                    </div>*/}
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-slider" role="button" data-slide="prev">
                            <span className="carousel-control" aria-hidden="true"><i
                                className="lni-chevron-left"></i></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-slider" role="button" data-slide="next">
                            <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
            )
    }
}
export default Carousel;