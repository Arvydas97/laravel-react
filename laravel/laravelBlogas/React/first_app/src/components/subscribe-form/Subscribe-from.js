import React, {Component} from 'react';
import styles from './subscribe-from.scss';
import {createBlogPost} from "../ipi_post/a";
import Ipi_Comments from "../ipi_comments/Ipi_Comments";




class SubscribeFrom extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state ={
            name:"",
            comment:"",
            created_at:""
        }
    }

    onChange(e) {
        if (e.target.id === 'name') {
            this.setState({ name: e.target.value });
        } else if (e.target.id === 'comment') {
            this.setState({ comment: e.target.value });
            console.log(e.target.value);
        }
    }

    handleClick(){

        fetch('http://blogas.test/api/storeComment', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                name: this.state.name,
                comment: this.state.comment,
                post_id: this.props.post_id
            })
            }).then(res => {

            let asd  = this.state;
            console.log(asd);
                    this.props.addComment(asd);

                    // clear the message box
                    // this.setState({
                    //     loading: false,
                    //     comment: { ...comment, message: "" }
                    // });

            })
    }


    render(){
        return(

    <div>
            <div id="subscribe" className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            <div className="subscribe-form">
                                <div className="form-wrapper">
                                    <div className="sub-title text-center">
                                        <h3>Komentarų sekcija</h3>
                                        <p>Parašyk visiems įdomią savo nuomenę</p>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-12 form-line">
                                                <div className="form-group">
                                                    <input onChange={this.onChange} id='name' type="text" className="form-control" name="name" placeholder="Name"/>
                                                </div>
                                            </div>
                                            <div className="col-12 form-line">
                                                <div className="form-group">
                                                    <input onChange={this.onChange} id='comment' type="text" className="form-control" name="comment" placeholder="Comment"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-submit">
                                                    <a className="btn btn-common btn-effect" onClick={this.handleClick} >Komentuoti! </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
export default SubscribeFrom;