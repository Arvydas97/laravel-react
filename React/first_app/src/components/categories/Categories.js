import React, {Component} from 'react';
import styles from './categories.scss';


class Categories extends Component{
    render(){
        return(

            <section id="portfolios" className="section">

                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Works</h2>
                        <span>Works</span>
                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos debitis.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="controls text-center">
                                <a className="filter active btn btn-common btn-effect" data-filter="all">
                                    All
                                </a>
                                <a className="filter btn btn-common btn-effect" data-filter=".design">
                                    Design
                                </a>
                                <a className="filter btn btn-common btn-effect" data-filter=".development">
                                    Development
                                </a>
                                <a className="filter btn btn-common btn-effect" data-filter=".print">
                                    Print
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            )
    }
}
export default Categories;