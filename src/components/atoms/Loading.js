const Loading = ({
  backgroundColor = "white", // white as default background color
  color = "black", // black as default stroke color
  message = null, // no message as default
  style = "fullscreen", // allowed: fullscreen / inline
  size = "regular",
}) => {
  return (
    <div
      style={{backgroundColor: backgroundColor}}
      className={`loading-container ${size} ${style === "inline" ? "width-auto height-auto" : ""}`}>
      <div>
        { message && (<h1 style={{color: color}}>{message}</h1>)}
        <div className="lds-ellipsis">
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
          <div style={{backgroundColor: color}} ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
