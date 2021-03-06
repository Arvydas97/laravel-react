import React, {Component} from 'react';
import styles from './footer.scss';

class Footer extends Component{
    render(){
        return(
            <footer>

                <div id="copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="site-info float-left">
                                    <p>Crafted by <a href="http://uideck.com" rel="nofollow">UIdeck</a></p>
                                </div>
                                <div class="float-right">
                                    <ul class="nav nav-inline">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">About Prime</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">TOS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Return Policy</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">FAQ</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;