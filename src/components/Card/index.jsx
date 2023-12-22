import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { LoadingSpinner } from "../LoadingSpinner";

export const Card = ({ video = "", title = "", content = "" }) => {
  const ref = useRef(null);
  const [focus, setFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onLoop = () => {
    ref.current.play();
  };
  const onPause = () => {
    ref.current.pause();
    ref.current.currentTime = 0;
  };

  const onEndedLoop = () => {
    if (focus) onLoop();
  };

  useEffect(() => {
    if (focus) {
      onLoop();
    } else {
      onPause();
    }
  }, [focus]);

  return (
    <div
      className="card"
      onMouseOver={() => setFocus(true)}
      onMouseOut={() => setFocus(false)}
    >
      <div className="card__video">
        {isLoading ? (
          <div className="card__video--loading">
            <LoadingSpinner />
          </div>
        ) : null}
        <video
          preload={"auto"}
          playsInline
          autoPlay
          ref={ref}
          muted={true}
          src={video}
          onEnded={onEndedLoop}
          onLoadedData={() => setIsLoading(false)}
        ></video>
      </div>
      <div className="card__copy">
        <h1 className="card__copy-title">{title}</h1>
        <p className="card__copy-content">{content}</p>
      </div>
    </div>
  );
};
