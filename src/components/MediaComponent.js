import React, { Component } from "react";
import ReactPlayer from 'react-player'


class MediaComponent extends Component {
  
  render() {
    return (
      <div className=" absolute z-1 top-0 left-0 sm:absolute xs:relative">
           <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/video.mp4'
            width='100%'
            playing={true}
            height='100%'
            muted={true}
            autoplay={true}
            controls = {false} 

            />
        
      </div>
    );
  }

}

export default MediaComponent;