import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Comments from "../comments/Comments";
import Post from "../ipi_post/Post";
import Ipi_Comments from "../ipi_comments/Ipi_Comments";
import SubscribeFrom from "../subscribe-form/Subscribe-from";




class PostWithComments extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.addComment = this.addComment.bind(this);
        this.state ={
            posts:[],
            comm:[],
            category:[],
            user:[],
            likes: 0,
            loading: false
        }
    }
    addComment(comment) {
        this.setState({
            loading: false,
            comm: [comment, ...this.state.comm]
        });
    }
    componentDidMount() {
        const { post_id } = this.props.match.params;

        fetch('http://blogas.test/api/post/'+post_id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    posts: data,
                    likes: data['likes']
                })
            });
        fetch('http://blogas.test/api/comment/'+post_id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    comm: data
                })
            });
        fetch('http://blogas.test/api/category/'+post_id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    category: data
                })
            });
    }
    handleClick (pospost_id) {
        this.setState((prevState, { likes }) => ({
            likes: this.state.likes + 1
        }));
        fetch('http://blogas.test/api/post/'+pospost_id+'/like', {
            method: 'POST',
        })
    };
    render(){
        const postCommments = this.state.comm.map( cm =>{
            return (
                <Ipi_Comments name = {cm.name} comment = {cm.comment} created_at ={cm.created_at}  />
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
                                <button className={"btn btn-common btn-effect"} onClick={() => this.handleClick(this.state.posts.id)} >Patinka:{this.state.likes} </button>
                            </div>

                                <div className="author lni-calendar row">{this.state.category.name }</div>
                                <div className="date lni-calendar row">{this.state.posts.created_at }</div>

                            <div className="meta-tags">
                                <span><a href="#">{this.state.user.name}</a></span>
                                <span className="lni-reply">{this.state.posts.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <SubscribeFrom post_id ={this.state.posts.id} addComment={this.addComment} />
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