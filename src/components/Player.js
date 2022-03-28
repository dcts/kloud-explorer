import { useState, useEffect } from "react";
import { secondsToTimeStr } from "./helper/HelperFunctions";
import { heart, skip, play, loop } from "./atoms/Icons";

const Player = () => {
  const isPlaying = false;
  const selectedTrack = {
    track: "#1252",
    artist: "WE ARE KLOUD",
    imageUrl: "https://lh3.googleusercontent.com/lGSS7PhlbUNFUAJ71gdaB00Y-kRUXy6Hbo1Yjpge9ULwjT8uduUepBEz63cStGU7ZdpCoRgP3w6m6IDYyZ6V7bp8sLnKR4YxFAMGDQ=w417",
    trackLength: 225, // in seconds
  }
  const currentPosition = 44; // in seconds
  const progress = currentPosition / selectedTrack.trackLength;

  const currentTimeStr = secondsToTimeStr(currentPosition);
  const endTimeStr = secondsToTimeStr(selectedTrack.trackLength);



  return (
    <div className="player-container">
      <div className="player-inner">
        <div className="track-image">
          <img src={selectedTrack.imageUrl} alt="" />
        </div>
        <div className="track-contents">
          <div className="artisttitle">{selectedTrack.artist}</div>
          <div className="tracktitle">{selectedTrack.track}</div>
          <div className="timeline">
            <p className="track-time-string">{currentTimeStr}</p>
            <div className="line-component">
              <div className="line full"></div>
              <div className="line progress"></div>
            </div>
            <p className="track-time-string">{endTimeStr}</p>
          </div>
          <div className="controls">
            {loop(20, "rgba(255,255,255,0.28)")}
            {skip(30, "rgba(255,255,255,0.28)", true)}
            {play(50, "rgba(255,255,255,0.28)")}
            {skip(30, "rgba(255,255,255,0.28)")}
            {heart(25, "rgba(255,255,255,0.28)")}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Player;
