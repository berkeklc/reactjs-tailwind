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
  
  playPause = () => {

    let isPlaying = this.state.isPlaying;
    this.state.loop = true;
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
        <p className="colors font-custom1 text-white hover:text-blue-600">press x</p>
        </button>
      </div>
    );
  }
}

export default Sound;
