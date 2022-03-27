import { useState, useEffect } from "react";
import banner from "../img/banner.png";
import bannerWithArtText from "../img/banner-with-art-text.png";

import Loading from "./atoms/Loading";

const Home = ({randomBannerTexts}) => {
  const [pageStatus, setPageStatus] = useState("loading"); // "loading", "ok", "error"
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPageStatus("ok");
    }, 2000);
  }, []);

  return (
    <div className="home-container">

      {/* BANNER */}
      <div className="banner">
        <img src={banner} alt="" />
        {randomBannerTexts.map((randomBannerText, i) =>
          <p className="art-text no-select" style={randomBannerText.position} key={i}>{randomBannerText.text}</p>
        )}
      </div>

      {/* BLOB SECTION */}
      <div className="blob-wrapper">
        <div className="white-blob"></div>
        { pageStatus === "loading" && (
          <div className="loading-container">
            <Loading backgroundColor="transparent" color="black" />
          </div>
        )}
        { pageStatus === "ok" && <p className="start-text">START</p> }
      </div>
      { !isPlaying && pageStatus === "loading" && <h1 className="tagline blinkme">Loading <strong>WE ARE KLOUD</strong> Music Player</h1> }
      { !isPlaying && pageStatus === "ok" && <h1 className="tagline loaded">Explore <strong>WE ARE KLOUD</strong> NFTs</h1> }
    </div>

  );
};

export default Home;
