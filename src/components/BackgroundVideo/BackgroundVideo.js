import React from 'react';

import classes from './BackgroundVideo.module.css';
import Header from './header/header'
import videoSource from './background.mp4';
import MenuBar from './header/menubar/menubar';
const BackgroundVideo = () => {
    // const videoSource = "https://www.w3schools.com/tags/movie.mp4"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                <Header></Header>
                <MenuBar></MenuBar>                            
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo
