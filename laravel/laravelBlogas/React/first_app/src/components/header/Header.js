import React, {Component} from 'react';
import styles from './header.scss';

class Header extends Component{
    render(){
        return(
                <header id="slider-area">
                    <nav className="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
                        <div className="container">
                            <a className="navbar-brand" href="/"><span className="lni-bulb"></span>!Blogas blogas</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <i className="lni-menu"></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="/">Pagrindinis</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="/categories">Kategorijos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link page-scroll" href="#features">Jau greitai!</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
        )
    }
}

export default Header;