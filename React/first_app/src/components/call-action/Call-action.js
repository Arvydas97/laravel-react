import React, {Component} from 'react';
import styles from './call-action.scss';


class CallAction extends Component{
    render(){
        return(
            <section className="call-action section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <div className="cta-trial text-center">
                                <h3>Are You Ready To Get Started?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                                <a href="#" className="btn btn-common btn-effect">Purchase Now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
    }
}
export default CallAction;