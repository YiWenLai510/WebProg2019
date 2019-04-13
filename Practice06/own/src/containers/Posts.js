import React, { Component } from "react";
import './blog.css';
import Post from '../components/Post.js';
export default class Posts extends Component {
    render() {
        const imglist = [
        
        "https://c2.staticflickr.com/6/5515/9199788659_818383d0b8_k.jpg",
        "http://24.media.tumblr.com/23e3f4bb271b8bdc415275fb7061f204/tumblr_mve3rvxwaP1st5lhmo1_1280.jpg",
        "http://24.media.tumblr.com/ac840897b5f73fa6bc43f73996f02572/tumblr_mrraat0H431st5lhmo1_1280.jpg",
        "http://24.media.tumblr.com/e100564a3e73c9456acddb9f62f96c79/tumblr_mufs8mix841st5lhmo1_1280.jpg",
        "https://c2.staticflickr.com/4/3676/12024271573_d266422362_h.jpg",
        "http://25.media.tumblr.com/95c842c76d60b7bc982d92c76216d037/tumblr_mx3tnm96k81st5lhmo1_1280.jpg",
        "http://25.media.tumblr.com/88b812f5f9c3d7b83560fd635435d538/tumblr_mx3tlblmY21st5lhmo1_1280.jpg"
        ];
        const authors = [
            
            "Jonas Nilsson Lee",
            "Les Haines",
            "Rula Sibai",
            "Charlie Foster",
            "Thanun Buranapong",
            "Yinan Chen",
            "Nicolas Raymond"
        ];
        const classNameList =[
            
            "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3",
            "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3",
            "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3",
            "photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3",
            "photo-box photo-box-thin pure-u-1 pure-u-lg-2-3",
            "photo-box photo-box-thin pure-u-1 pure-u-lg-2-3",
            "photo-box pure-u-1 pure-u-md-1-3"
        ];
        const blogs = authors.map((ele,index)=>(
            <Post classN={classNameList[index]} authorN={ele} imgSource={imglist[index]} />
        ));
        return(
            <div>
                <div class="pure-g">
                    
                    <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                        <a href="http://www.dillonmcintosh.tumblr.com/">
                            <img src="http://24.media.tumblr.com/d6b9403c704c3e5aa1725c106e8a9430/tumblr_mvyxd9PUpZ1st5lhmo1_1280.jpg"
                                alt="Beach" />
                        </a>

                        <aside class="photo-box-caption">
                            <span>by <a href="http://www.dillonmcintosh.tumblr.com/">Dillon McIntosh</a></span>
                        </aside>
                    </div>

                    <div class="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-3">
                        <div class="l-box">
                            <h1 class="text-box-head">Photos from around the world</h1>
                            <p class="text-box-subhead">A collection of beautiful photos gathered from Unsplash.com.</p>
                        </div>
                    </div>
                    {blogs}
                    
                </div>

                <div class="footer">
                    View the source of this layout to learn more. Made with love by the YUI Team.
                </div>

            </div>
        );
    }
}