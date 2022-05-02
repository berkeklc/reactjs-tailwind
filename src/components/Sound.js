import React, { Component } from "react";
import { ReactComponent as Twitter } from './../assets/sound.svg';

import song from "./../assets/sound.mp3";

class Sound extends Component {
  state = {
    audio: new Audio(song),
    play: true,
    volume: 0.2,
    isPlaying: true,
    autoPlay: true,
    loop: true,
  };
  
  
  render() {
    return (
      <div className="absolute z-[9999] bottom-10 left-10">
  
       <audio id="track" className="audios"
loop
src={song} 
      />
            
<div id="player-container">
  <div id="play-pause" className="play"> <Twitter className="colors h-8 fill-[#548bee]	hover:fill-white" /></div>
</div>
      </div>
    );
  }
}

export default Sound;
