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
                    </div>
                </div>
            </div>
        </div>
            )
    }
}
export default SubscribeFrom;