import React, { Component } from "react";
import './blog.css';

export default class Home extends Component {
    render(){
        return (
                    <div class="text-box ">
                        <div class="l-box">
                            <h1 class="text-box-head">It is a blog with photos around the world</h1>
                            <p class="text-box-subhead">click the "Blog" button to view photos</p>
                            <p class="text-box-subhead">click the "Photographer" button to go to photographers' website</p>
                        </div>
                    </div>
        );
    }
}