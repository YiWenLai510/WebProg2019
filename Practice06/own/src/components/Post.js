import React from "react";
import '../containers/blog.css';
export default ({classN,authorN,imgSource}) => {
    return <div className={classN}>         
                <img src={imgSource} alt="Beach" />                     
                <aside className="photo-box-caption">
                    <span>by {authorN}</span>
                </aside>
            </div>;
}