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
  handleKeyDown = e => {
    if(e.keyCode === this.props.keyTrigger.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
      this.audio.volume = 0.2
    }
  }
  
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
    this.audio.volume = 0.2
  }
  render() {
    return (
      <div className="absolute z-[9999] bottom-10 left-10">
       <audio class="audios"
loop
controls
src={song} 
      />
      </div>
    );
  }
}

export default Sound;
