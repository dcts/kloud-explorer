import { useState, useEffect } from "react";
import bannerWithArtText from "../img/banner-with-art-text.png";

import Loading from "./atoms/Loading";

const Home = () => {
  const [pageStatus, setPageStatus] = useState("loading"); // "loading", "ok", "error"
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageStatus("ok");
    }, 2000);
  }, []);

  const handleStart = () => {
    setIsPlaying(true);
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
        { !isPlaying &&
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
        { !isPlaying && pageStatus === "loading" && <h1 className="tagline blinkme">Loading <strong>WE ARE KLOUD</strong> Music Player</h1> }
        { !isPlaying && pageStatus === "ok" && <h1 className="tagline loaded">Explore <strong>WE ARE KLOUD</strong> NFTs</h1> }
      </div>
    </div>
  );
};

export default Home;
