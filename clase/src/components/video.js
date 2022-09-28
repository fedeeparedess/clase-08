import React, { Component } from "react";

export default class Video extends Component {
    render (){
        return(
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xkg0P3xdvR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        );
    }
}