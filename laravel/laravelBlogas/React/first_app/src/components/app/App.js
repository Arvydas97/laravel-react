import React, {Component} from 'react';
import Header, {}from '../header/Header';
import Main, {}from '../main/Main';
import Footer, {}from '../footer/Footer';
import styles from './app.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Post from "../ipi_post/Post";
import PostWithComments from "../ipi_postWithComments/PostWithComments";



class App extends Component{
    render(){
        return(
            <div className="container">
                <Header/>
                <Router>
                     <Switch>
                         <Route exact path="/" component={Main} />
                         <Route exact path="/post/:post_id" component={PostWithComments}/>

                     </Switch>
                </Router>

                <Footer/>
            </div>
            )
    }
}
export default App;