import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./style.scss";

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
    ref.current.currentTime = 0;
  }, []);

  useLayoutEffect(() => {
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
        {isLoading && <p>Loading</p>}
        <video
          preload={"auto"}
          playsInline
          autoPlay
          ref={ref}
          muted={true}
          src={video}
          onEnded={onEndedLoop}
          // onLoadedMetadata={() => {
          //   setIsLoading(false);
          // }}
          onCanPlay={() => setIsLoading(false)}
        ></video>
      </div>
      <div className="card__copy">
        <h1 className="card__copy-title">{title}</h1>
        <p className="card__copy-content">{content}</p>
      </div>
    </div>
  );
};
