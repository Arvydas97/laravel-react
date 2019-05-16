import React, {Component} from 'react';
import styles from './comments.scss';


class Comments extends Component{
    render(){
        return(
            <section className="testimonial section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div id="testimonials" className="touch-slider owl-carousel">
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img1.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">Johnathan Doe</a></h2>
                                                <span>Marketing Head Matrix media</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Explicabo quidem, excepturi facere magnam illum,
                                                at accusantium doloremque odio.</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star"></i></span>
                                            <span><i className="lni-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img2.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">Oidila Matik</a></h2>
                                                <span>President Lexo Inc</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Explicabo quidem, excepturi facere magnam illum,
                                                at accusantium doloremque odio.</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img3.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">- Alex Dattilo</a></h2>
                                                <span>CEO Optima Inc</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Explicabo quidem, excepturi facere magnam illum,
                                                at accusantium doloremque odio.</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img2.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">Oidila Matik</a></h2>
                                                <span>President Lexo Inc</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Explicabo quidem, excepturi facere magnam illum,
                                                at accusantium doloremque odio.</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-item">
                                        <div className="author">
                                            <div className="img-thumb">
                                                <img src="img/testimonial/img1.jpg" alt=""></img>
                                            </div>
                                            <div className="author-info">
                                                <h2><a href="#">- Alex Dattilo</a></h2>
                                                <span>CEO Optima Inc</span>
                                            </div>
                                        </div>
                                        <div className="content-inner">
                                            <p className="description">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Explicabo quidem, excepturi facere magnam illum,
                                                at accusantium doloremque odio.</p>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star-filled"></i></span>
                                            <span><i className="lni-star"></i></span>
                                            <span><i className="lni-star"></i></span>
                                            <span><i className="lni-star"></i></span>
                                        </div>
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
export default Comments;