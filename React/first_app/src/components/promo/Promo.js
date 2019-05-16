import React, {Component} from 'react';
import styles from './promo.scss';


class Promo extends Component{
    render(){
        return(

            <section id="portfolios" className="section">

                <section className="video-promo section">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="video-promo-content text-center">
                                    <a href="https://www.youtube.com/embed/LSgBpbgTlhw" className="video-popup"><i className="lni-film-play"></i></a>
                                    <h2 className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Our
                                        Introductory Video</h2>
                                    <p className="wow zoomIn" data-wow-duration="1000ms" data-wow-delay="100ms">Learn
                                        more about us, its only 30mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="counters section bg-defult">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="facts-item">
                                    <div className="icon">
                                        <i className="lni-rocket"></i>
                                    </div>
                                    <div className="fact-count">
                                        <h3><span className="counter">100</span>%</h3>
                                        <h4>Faster</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="facts-item">
                                    <div className="icon">
                                        <i className="lni-coffee-cup"></i>
                                    </div>
                                    <div className="fact-count">
                                        <h3><span className="counter">700</span></h3>
                                        <h4>Cup of Coffee</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="facts-item">
                                    <div className="icon">
                                        <i className="lni-user"></i>
                                    </div>
                                    <div className="fact-count">
                                        <h3><span className="counter">10000</span>+</h3>
                                        <h4>Active Clients</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="facts-item">
                                    <div className="icon">
                                        <i className="lni-heart"></i>
                                    </div>
                                    <div className="fact-count">
                                        <h3><span className="counter">1689</span></h3>
                                        <h4>Peoples Love</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="cta" className="section" data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-xs-12">
                                <div className="cta-text">
                                    <h5>Stil confused? Download a free lite version to get started!</h5>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-xs-12 text-right">
                                <a href="#" className="btn btn-border">Download</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            )
    }
}
export default Promo;