import React, {Component} from 'react';
import styles from './subscribe-from.scss';


class SubscribeFrom extends Component{
    render(){
        return(

    <div>
            <div id="subscribe" className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            <div className="subscribe-form">
                                <div className="form-wrapper">
                                    <div className="sub-title text-center">
                                        <h3>Subscribe to Newsletter</h3>
                                        <p>Weekly Freebies and More!</p>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 form-line">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="email" placeholder="Name"></input>
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-line">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="phone"
                                                           placeholder="Phone"></input>
                                                </div>
                                            </div>
                                            <div className="col-12 form-line">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email"
                                                           placeholder="Email"></input>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-submit">
                                                    <button type="submit"
                                                            className="btn btn-common btn-effect">Subscribe Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-xs-12">
                            <div className="sub-item-box">
                                <div className="icon-box">
                                    <i className="lni-bullhorn"></i>
                                </div>
                                <div className="text-box">
                                    <h4>Weekly Free Learning Materials</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum
                                        libero beatae obcaecati.</p>
                                </div>
                            </div>
                            <div className="sub-item-box">
                                <div className="icon-box">
                                    <i className="lni-book"></i>
                                </div>
                                <div className="text-box">
                                    <h4>Free PDF to Get Started</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum
                                        libero beatae obcaecati.</p>
                                </div>
                            </div>
                            <div className="sub-item-box">
                                <div className="icon-box">
                                    <i className="lni-timer"></i>
                                </div>
                                <div className="text-box">
                                    <h4>10% Instant Discount</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, laborum
                                        libero beatae obcaecati.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div id="clients" className="section">

            <div className="container">

            <div className="row" id="clients-scroller">
            <div className="client-item-wrapper">
            <img src="img/clients/img1.png" alt=""></img>
    </div>
    <div className="client-item-wrapper">
            <img src="img/clients/img2.png" alt=""></img>
    </div>
    <div className="client-item-wrapper">
            <img src="img/clients/img3.png" alt=""></img>
    </div>
    <div className="client-item-wrapper">
            <img src="img/clients/img4.png" alt=""></img>
    </div>
    <div className="client-item-wrapper">
            <img src="img/clients/img5.png" alt=""></img>
    </div>
    <div className="client-item-wrapper">
            <img src="img/clients/img6.png" alt=""></img>
    </div>
    </div>
    </div>
    </div>
        </div>
            )
    }
}
export default SubscribeFrom;