import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from "../ipi_post/Post";



class PostWithComments extends Component{
    constructor(){
        super()
        this.state ={
            posts:[]
        }
    }
    componentDidMount() {
        const { post_id } = this.props.match.params
        console.log(post_id)
        fetch('http://blogas.test/api/post/'+post_id)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    posts: data
                })
            })
    }
    render(){
        return(
            <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
                <div className="blog-item-wrapper">
                    <div className="blog-item-img">
                        <Link to ="/post" >
                            <img src="http://pluspng.com/img-png/png-culture-creative-culture-building-png-1000.png" alt=""/>
                        </Link>
                    </div>
                    <div className="blog-item-text">
                        <div className="date"><i className="lni-calendar"></i>{this.state.posts.created_at }</div>
                        <div className="date"><i className="lni-calendar"></i>{this.state.posts.cat_id }</div>
                        <h3><a href="single-post.html">{this.state.posts.title}</a></h3>
                        <div className="meta-tags">
                            <span><a href="#"><i className="lni-bubble"></i>{this.state.posts.user_id}</a></span>
                            <span><a href="#"><i className="lni-reply"></i> {this.state.posts.description}</a></span>
                            <button className={"btn-dark"} onClick={this.handleClick} >Likes: <span className="lni-reply">{this.state.posts.likes}</span> </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostWithComments;