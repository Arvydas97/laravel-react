import React, {Component} from 'react';
import styles from './ipi_comments.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Ipi_Comments extends Component{
    constructor(){
        super()

    }


    render(){

        return(
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img3.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">{this.props.name}</a></h2>
                                                <span>{this.props.created_at}</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">{this.props.comment}</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star"></i></span>
                                        </div>
                                    </div>
                                </div>
            )
    }
}
export default Ipi_Comments;