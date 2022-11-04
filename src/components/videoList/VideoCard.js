import React from "react";
import "./VideoCard.scss";
import VideoData from "../../assets/data/video-details.json";

function VideoCard() {
  return (
    <>
      {VideoData.map((videoDetail) => {
        return (
          <>
            <aside className="videoCard__container" key={videoDetail.id}>
              <div className="videoCard__item">
                <img className="videoCard__img" src={videoDetail.image}></img>
              </div>

              <div className="videoCard__item">
                <h4 className="videoCard__title">{videoDetail.title}</h4>
                <p className="videoCard__description">{videoDetail.channel}</p>
              </div>
            </aside>
          </>
        );
      })}
    </>
  );
}

export default VideoCard;
