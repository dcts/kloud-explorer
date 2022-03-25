import { useState, useEffect } from "react";
import banner from "../img/banner.png";
import whiteBlob from "../img/white-blob.png";
import { FaTwitter } from "react-icons/fa";

const Home = () => {
  const [randomPositions, setRandomPositions] = useState(initRandomPos(window.innerWidth));

  const handleResizeEvent = () => setRandomPositions(initRandomPos());
  useEffect(() => {
    window.addEventListener("resize", handleResizeEvent);
    return () => {
      window.removeEventListener("resize", handleResizeEvent);
    }
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} alt="" />
        {randomPositions.map((randomPos, i) =>
          <p className="art-text" style={randomPos} key={i}>NFT music explorer</p>
        )}
        <div className="creator-reference">
          <p>created by <strong>dcts</strong></p>
          <FaTwitter />
        </div>
      </div>
      <div className="flex justify-center align-center">
        <img src={whiteBlob}></img>
        <p className="start-text">START</p>
      </div>
      <h1 className="tagline">Explore <strong>WE ARE KLOUD</strong></h1>
    </div>
  );
};


function initRandomPos() {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomPositions = [];
  const n = window.innerWidth / 20;
  console.log(n);
  for (let i=0; i<n; i++) {
    randomPositions.push({
      top: getRandomInt(-20, 260) + "px",
      left: getRandomInt(-200, 1000) + "px",
    })
  }
  for (let i=0; i<n; i++) {
    randomPositions.push({
      top: getRandomInt(-20, 260) + "px",
      right: getRandomInt(-200, 1000) + "px",
    })
  }
  return randomPositions;
}

export default Home;
