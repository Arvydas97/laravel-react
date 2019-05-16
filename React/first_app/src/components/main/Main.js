import React, {Component} from 'react';
import styles from './main.scss';
import Blogs2 from "../blogs2/Blogs2";
import Categories from "../categories/Categories";
import Comments from "../comments/Comments";
import Carousel from "../carousel/Carousel";

class Main extends Component{
    render(){
        return(
            <div>
                <Carousel/>
                <Blogs2/>
                <Categories/>
                <Comments/>
            </div>
        )
    }
}
export default Main;