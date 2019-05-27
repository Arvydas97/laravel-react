import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



class Post extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state ={
            category:""
        }
}
    componentDidMount() {
        fetch('http://laravel-react.test/api/category/'+this.props.id)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    category: data["name"]
                })
            });
    }
    handleClick(){
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
    }
    render(){
        return(
            <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
                <div className="blog-item-wrapper">
                    <div className="blog-item-img">
                        <Link to ={`/post/${this.props.id}`} >
                            <img src="http://pluspng.com/img-png/png-culture-creative-culture-building-png-1000.png" alt=""/>
                        </Link>
                    </div>
                    <div className="blog-item-text">
                        <div className="date"><i className="lni-calendar"></i>{this.props.created_at }</div>
                        <div className="date"><i className="lni-calendar"></i>{this.state.category }</div>
                        <h3><Link to ={`/post/${this.props.id}`} >{this.props.title}</Link></h3>
                        <div className="meta-tags">
                            <span><i className="lni-bubble"></i>{this.props.user_id}</span>
                            <span><i className="lni-reply"></i> {this.props.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Post;