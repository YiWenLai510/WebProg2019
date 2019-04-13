import React, { Component } from "react";

export default class Authorslist extends Component {
    render(){
        const authors = ["Dillon McIntosh","Jonas Nilsson Lee","Les Haines","Rula Sibai",
                    "Charlie Foster","Thanun Buranapong","Yinan Chen","Nicolas Raymond"];
        const links = ["http://www.dillonmcintosh.tumblr.com/",
                    "http://www.nilssonlee.se/",
                    "https://www.flickr.com/photos/leshaines123/9199788659/in/photolist-f1XjDR-oqUsF4-eGN3fd-uLvGyn-nsUXqP-6tKPeq-h2Bwtz-6oVtec-3vzcD-nhKUBn-eGN7RY-atDkE4-6qpKgh-5qhbkM-eXSJSR-8YGjfD-eXSK7n-c3hvqo-ddvqc2-h1FgsH-4W6bip-dcnDYJ-ejny6W-bEnete-qoSUSt-nyApt1-cs1Paf-oanrNv-dmE5c9-c4Sgiq-nLYPa4-eHQbYp-fn8csk-uq4gKy-fp186j-7ZcaSx-6wMKEA-kERNCe-veHJHy-eGNaj5-4VddEM-rXUqrU-9X8YXf-87nMXX-tKCh7h-u88G4h-nHuLus-9WPUyn-8fjvkU-nKyT33",
                    "http://www.flickr.com/photos/rulasibai/",
                    "http://www.flickr.com/photos/charliefoster/",
                    "http://twitter.com/iBoZR",
                    "http://www.goodfreephotos.com/","http://www.goodfreephotos.com/"];
        const list = authors.map((ele,index) => (
            <li key={index}>
                <a href={links[index]}>{ele}</a>
            </li>
        ));
        return(
            <div>
                {list}
            </div>
        );
    }
}