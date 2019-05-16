import React, {Component} from 'react';
import Header, {}from '../header/Header';
import Main, {}from '../main/Main';
import Footer, {}from '../footer/Footer';
import styles from './app.scss';


class App extends Component{
    render(){
        return(
                <div className="container">
                   <Header/>
                    <Main/>
                    <Footer/>
                </div>
            )
    }
}
export default App;