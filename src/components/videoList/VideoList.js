import React from "react";
import "./videoList.scss";

const VideoList = ({ videos, onClick }) => {
  return (
    <>
      <aside className="videoList__container">
        <h4 className="videoList__title-main">Next Videos</h4>
        {videos.map((video) => (
          <div className="videoList__items-wrapper" key={video.id}>
            <div className="videoList__item">
              <img
                src={video.image}
                alt={video.title}
                className="videoList__thumbnail"
                onClick={(clickEvent) => onClick(clickEvent, video.id)}
              />
            </div>
            <div className="videoList__item">
              <h4 className="videoList__title">{video.title}</h4>
              <p className="videoList__creator">{video.channel}</p>
            </div>
          </div>
        ))}
      </aside>
    </>
  );
};

export default VideoList;
