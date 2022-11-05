import React from "react";
import "./VideoList.scss";

const VideoList = (props) => {
  return (
    <aside className="videoList__container">
      {props.videos.map((video) => (
        <>
          <div className="videoList__item">
            <img
              key={video.id}
              src={video.image}
              alt={video.title}
              className="videoList__thumbnail"
            />
          </div>
          <div className="videoList__item">
            <h4 className="videoList__title">{video.title}</h4>
            <p className="videoList__creator">{video.channel}</p>
          </div>
        </>
      ))}
    </aside>
  );
};

export default VideoList;
