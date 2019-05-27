import React, {Component} from 'react';
import styles from './categories.scss';
import Ipi_Comments from "../ipi_comments/Ipi_Comments";


class Categories extends Component{
    constructor(){
        super()
        this.state ={
            categories:[],

        }
    }
    componentDidMount() {
        fetch('http://laravel-react.test/api/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            });
    }
    render(){
        const categories = this.state.categories.map( category =>{
            return (
                <a className="filter btn btn-common btn-effect" data-filter=".print">
                    {category.name}
                </a>

            )});
        return(

            <section id="portfolios" className="section">

                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Kategorijos</h2>
                        <p className="section-subtitle">Šis blogas susisdeda iš 4 pagrindinių temų!</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="controls text-center">
                                {categories}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Categories;