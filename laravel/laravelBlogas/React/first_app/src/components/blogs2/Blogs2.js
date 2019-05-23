import React, {Component} from 'react';
import Post from "../ipi_post/Post";
import styles from './blogs2.scss';
import postData from '../../data/postdata'

class Blogs2 extends Component{
    constructor(){
        super()
        this.state ={
            posts:[]
            }
    }
    componentDidMount() {
        fetch("http://blogas.test/api/posts")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data
                })
            })
    }
    render(){
        const postComponents = this.state.posts.map( post =>{
            return (
                <Post id = {post.id} title = {post.title} description = {post.description} cat_id={post.cat_id} created_at ={post.created_at} likes = {post.likes}/>
            )})
        return(
            <section id="blog" className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Blogs</h2>
                        <span>Blogs</span>
                        <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos debitis.</p>
                    </div>
                    <div className="row">
                        {postComponents}
                        </div>
                    </div>
            </section>
            )
    }
}
export default Blogs2;