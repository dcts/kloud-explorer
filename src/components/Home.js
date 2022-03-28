import { useState, useEffect } from "react";
import bannerWithArtText from "../img/banner-with-art-text.png";

import Player from "./Player";
import TrackQueue from "./TrackQueue";
import Loading from "./atoms/Loading";

const Home = () => {
  const [pageStatus, setPageStatus] = useState("loading"); // "loading", "ok", "started", "error"
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageStatus("ok");
    }, 3000);
  }, []);

  const handleStart = () => {
    setIsPlaying(true);
    setPageStatus("started");
  }

  return (
    <div className="home-container">
      {/* BANNER (WIDE) */}
      <div className="banner">
        <img src={bannerWithArtText} alt="" />
      </div>

      {/* MAIN SECTION (1080px max) */}
      <div className="inner-container">
        {/* BLOB SECTION */}
        { (pageStatus === "loading" || pageStatus === "ok") &&
          <div className="blob-wrapper">
            <div className="white-blob"></div>
            { pageStatus === "loading" && (
              <div className="loading-container">
                <Loading backgroundColor="transparent" color="black" />
              </div>
            )}
            { pageStatus === "ok" && <p className="start-text" onClick={handleStart}>START</p> }
          </div>
        }
        { pageStatus === "loading" && <h1 className="tagline blinkme">Loading <strong>WE ARE KLOUD</strong> Music Player</h1> }
        { pageStatus === "ok" && <h1 className="tagline loaded">Explore <strong>WE ARE KLOUD</strong> NFTs</h1> }
        { pageStatus === "started" && (
          <>
            <h2 className="section-title">Currently Playing</h2>
            <Player/>
            <h2 className="section-title">Track Queue</h2>
            <TrackQueue/>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
