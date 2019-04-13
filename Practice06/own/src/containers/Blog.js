import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './blog.css';

import Authorslist from "./Authorslist";
import Posts from "./Posts";
import Home from "./home";
export default class Blog extends Component{
    render() {
        return (
            <div>
                <div className="header">
                    <div className="pure-menu pure-menu-horizontal">
                        <a className="pure-menu-heading" href="">Photo Gallery</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item pure-menu-selected">
                                <NavLink to="/home" className="pure-menu-link">Home</NavLink>
                            </li>
                            <li className="pure-menu-item">
                                <NavLink to="/posts" className="pure-menu-link">Blogs</NavLink>
                            </li>
                            <li className="pure-menu-item">
                                <NavLink to="/Authors" className="pure-menu-link">Photographer</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                
                <Switch>
                    <Route exact path="/Authors" component={Authorslist} />                    
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/home" component={Home} />
                    <Redirect from="/" to="/home" />
                </Switch>
    
            </div>
        );
    }
}