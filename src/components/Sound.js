import React, { Component } from "react";
import { ReactComponent as Twitter } from './../assets/sound.svg';

// Import your audio file
import song from "./../assets/sound.mp3";

class Sound extends Component {
  // Create state
  state = {

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="absolute z-[9999] bottom-10 left-10">
        {/* Show state of song on website */}
      

        {/* Button to call our main function */}
        <button onClick={this.playPause}>
        <Twitter className="h-8 fill-[#548bee]	hover:fill-white" />
        </button>
      </div>
    );
  }
}

export default Sound;
