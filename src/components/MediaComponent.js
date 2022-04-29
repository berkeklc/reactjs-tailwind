import React, { Component } from "react";
import ReactPlayer from 'react-player'


class MediaComponent extends Component {
  
  render() {
    return (
      
      <div className=" absolute z-1 top-0 left-0 sm:absolute xs:relative">
           <ReactPlayer
            className='react-player  hidden xs:block   fixed-bottom'
            url= 'videos/video.mp4'
            width='100%'
            playing={true}
            height='100%'
            loop={true}
            muted={true}
            autoPlay={true}
            controls = {false} 

            />
        <ReactPlayer
            className='react-player  hidden md:block fixed-bottom'
            url= 'videos/web.mp4'
            width='100%'
            playing={true}
            height='100%'
            loop={true}
            muted={true}
            autoPlay={true}
            controls = {false} 

            />
      </div>
      
    );
  }

}

export default MediaComponent;