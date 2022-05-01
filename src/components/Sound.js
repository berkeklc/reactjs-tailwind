import React, { Component } from "react";
import { ReactComponent as Twitter } from './../assets/sound.svg';

import song from "./../assets/sound.mp3";

class Sound extends Component {
  state = {

    audio: new Audio(song),

    isPlaying: true,
    autoPlay: true,
  };
  
  playPause = () => {

    let isPlaying = this.state.isPlaying;
    this.state.audio.load();

    if (isPlaying) {
      this.state.audio.play();
    } else {

      this.state.audio.pause();
    }
    
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="absolute z-[9999] bottom-10 left-10">

        <button  onClick={this.playPause}>
        <Twitter className="h-8 fill-[#548bee]	hover:fill-white" />
        </button>
      </div>
    );
  }
}

export default Sound;
