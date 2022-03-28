import { useState, useEffect } from "react";
import { secondsToTimeStr } from "./helper/HelperFunctions";
import { heart, trash } from "./atoms/Icons";

const TrackQueue = () => {
  const tracks = [
    {
      image: "https://lh3.googleusercontent.com/6EUwhvhT2jB0SqpoZNFCznSRUiyR_rxx-sYW_Q0l7hToCWkNJyeL2iVHUYD0uLKCrkRubInAwdlVOT0NZ2gzotfWwHkti83ifiAg6jA=w305",
      title: "#567",
      artist: "WE ARE KLOUD",
      trackLength: 30,
    },
    {
      image: "https://lh3.googleusercontent.com/yQnKEMhnzJwbOaNU_Bd_6LnKhk2bXWknUEWXK13UWTsb6pb__t21r3aTfVKrr_4VpBhgpYO3YBM_KODVU-RHtkT1Yg03rdlRaPKxKg=w305",
      title: "#4823",
      artist: "WE ARE KLOUD",
      trackLength: 30,
    },
    {
      image: "https://lh3.googleusercontent.com/Qg8iy2WI8yBJVHhQ9gVuINOt6U-tXKyEB8imGMSTueFYSG-SZyETKeBbmkg93tB43nqsgOiStJypecChUENND2Dbb8R5pn1dCxYVAQ=w305",
      title: "#123",
      artist: "WE ARE KLOUD",
      trackLength: 30,
    },
    // {
    //   image: "https://lh3.googleusercontent.com/VeSbCeKTHfgArNo9AQarYZKgBhWzIcCgMQ2Kk_aMXGgJh1dRWy_vTeEfZj8UYS-8e52c5W3SnEMH-bhW4KfMhcSUpnjMxPqXeXOm=w305",
    //   title: "#527",
    //   artist: "WE ARE KLOUD",
    //   trackLength: 30,
    // },
    // {
    //   image: "https://lh3.googleusercontent.com/PlBvKIURX-dqHDkI83jvLYPwIyWBUISfnApYNQg49hI6tEwtB2fne7dKtUX1lQZC7_QkEClsX_2XY_J7d7HZp4DdjJewhDpwq0PJ4S0=w305",
    //   title: "#3121",
    //   artist: "WE ARE KLOUD",
    //   trackLength: 30,
    // },
  ]
  return (
    <div className="track-queue-container">
      {tracks.map((track, indx) => {
        return (
          <Track
            key={indx}
            title={track.title}
            image={track.image}
            artist={track.artist}
            trackLength={track.trackLength}
          />
        )
      })}
    </div>
  );
};

const Track = ({image, title, artist, trackLength}) => {
  const trackLengthStr = secondsToTimeStr(trackLength);
  return (
    <div className="track-container">
      <div className="track-image">
        <img src={image} />
      </div>
      <div className="track-content">
        <h2>{title}</h2>
        <p>{artist} • {trackLengthStr}</p>
        {trash(22, "rgba(255,255,255,0.25)")}
        {heart(22, "rgba(255,255,255,0.25)")}
      </div>
    </div>
  )
}

export default TrackQueue;
