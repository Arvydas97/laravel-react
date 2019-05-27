import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Comments from "../comments/Comments";
import Post from "../ipi_post/Post";
import Ipi_Comments from "../ipi_comments/Ipi_Comments";




class PostWithComments extends Component{
    constructor(props){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.state ={
            posts:[],
            comments:[],
            category:[],
            user:[]
        }
    }
    handleClick(){
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
    }
    componentDidMount() {
        const { post_id } = this.props.match.params;

        fetch('http://laravel-react.test/api/post/'+post_id)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    posts: data
                })
            });
        fetch('http://laravel-react.test/api/comment/'+post_id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    comments: data
                })
            })
        fetch('http://laravel-react.test/api/category/'+post_id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    category: data
                })
            })

    }
    render(){
        console.log(this.state.comments);
        const postCommments = this.state.comments.map( comment =>{
            return (
                <Ipi_Comments id = {comment.id} name = {comment.name} comment = {comment.comment} post_id={comment.post_id} created_at ={comment.created_at} likes ={comment.likes} />
            )});
        return(
            <div>
                <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
                    <div className="blog-item-wrapper">
                        <div className="blog-item-img">
                            <Link to ="/post" >
                                <img src="http://pluspng.com/img-png/png-culture-creative-culture-building-png-1000.png" alt=""/>
                            </Link>
                        </div>
                        <div className="blog-item-text">
                            <div className="row">
                                <h3><a href="">{this.state.posts.title}</a></h3>
                                <button className={"btn-dark"} onClick={this.handleClick} >Patinka: <span className="lni-reply">{this.state.posts.likes}</span> </button>
                            </div>
                            <div className='row'>
                                <div className="author"><i className="lni-calendar"></i>{this.state.category.name }</div>
                                <div className="date"><i className="lni-calendar"></i>{this.state.posts.created_at }</div>
                            </div>
                            <div className="meta-tags">
                                <span><a href="#"><i className="lni-bubble"></i>{this.state.user.name}</a></span>
                                <span><i className="lni-reply"></i> {this.state.posts.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonial section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="testimonials" className="touch-slider owl-carousel">
                                    <div className="item">
                                        {postCommments}
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
export default PostWithComments;