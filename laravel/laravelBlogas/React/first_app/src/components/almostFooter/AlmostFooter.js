import React, {Component} from 'react';
import styles from './carousel.scss';

class AlmostFooter extends Component{
    render(){
        return(

                <section className="footer-Content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <h3>Essence</h3>
                                <div className="textwidget">
                                    <p>If you think you have the passion,
                                        attitude and capability to join us
                                        the next big software company
                                        s so that we can get the convers.</p>
                                </div>
                                <ul className="footer-social">
                                    <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="lni-linkedin-fill"></i></a></li>
                                    <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">Short Link</h3>
                                    <ul className="menu">
                                        <li><a href="#">Service</a></li>
                                        <li><a href="#">Wishlist</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Advance Sarch</a></li>
                                        <li><a href="#">Site Map</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">Contact Us</h3>
                                    <ul className="contact-footer">
                                        <li>
                                            <strong>Address :</strong> <span>1900 Pico Blvd, New York br Centernial, colorado</span>
                                        </li>
                                        <li>
                                            <strong>Phone :</strong> <span>+48 123 456 789</span>
                                        </li>
                                        <li>
                                            <strong>E-mail :</strong> <span><a href="#">info@example.com</a></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
                                <div className="widget">
                                    <h3 className="block-title">Instagram</h3>
                                    <ul className="instagram-footer">
                                        <li><a href="#"><img src="img/instagram/insta1.jpg" alt=""></img></a></li>
                                        <li><a href="#"><img src="img/instagram/insta2.jpg" alt=""></img></a></li>
                                        <li><a href="#"><img src="img/instagram/insta3.jpg" alt=""></img></a></li>
                                        <li><a href="#"><img src="img/instagram/insta4.jpg" alt=""></img></a></li>
                                        <li><a href="#"><img src="img/instagram/insta5.jpg" alt=""></img></a></li>
                                        <li><a href="#"><img src="img/instagram/insta6.jpg" alt=""></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )
    }
}
export default AlmostFooter;