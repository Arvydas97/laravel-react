import React, {Component} from 'react';
import styles from './categories.scss';
import Ipi_Comments from "../ipi_comments/Ipi_Comments";
import Post from "../ipi_post/Post";


class Categories extends Component{
    constructor(){
        super();
        this.state ={
            categories:[],
            posts:[],
            cat_idoz:0
        }
    }
    onButtonClick(id){
        this.setState({
            cat_idoz: id
        })
    }
    componentDidMount() {
        fetch('http://blogas.test/api/categories')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    categories: data
                })
            });
        fetch("http://blogas.test/api/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }
    render(){
        const categories = this.state.categories.map( category =>{
            return (
                <a className="filter btn btn-common btn-effect" data-filter=".print"  onClick={() => this.onButtonClick(category.id)}>
                    {category.name}
                </a>
            )});
        const postComponents = this.state.posts.map( post =>{
            return  this.state.cat_idoz === post.cat_id ||this.state.cat_idoz===0?
                <Post id = {post.id} title = {post.title} description = {post.description} cat_id={post.cat_id} created_at ={post.created_at} likes = {post.likes}/>
                :
                ""
            });
        return(

            <section id="portfolios" className="section">

                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Kategorijos</h2>
                        <p className="section-subtitle">Šis blogas susisdeda iš šių temų!</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="controls text-center">
                                <a className="filter btn btn-common btn-effect" data-filter=".print"  onClick={() => this.onButtonClick(0)}>
                                Visi
                            </a>
                                {categories }
                            </div>
                        </div>
                    </div>
                </div>
                <section id="blog" className="section">
                    <div className="container">

                        <div className="row">
                            {postComponents}
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
export default Categories;