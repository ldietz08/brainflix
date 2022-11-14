import "./mainContent.scss";
import heartSymbol from "../../assets/icons/likes.svg";
import eyeSymbol from "../../assets/icons/views.svg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MainContent = ({ videos, getSelectedVideo, defaultId }) => {
  const { title, channel, timestamp, views, likes, description } = videos;

  const params = useParams();
  const videoId = params.videoid ? params.videoid : defaultId;

  useEffect(() => {
    getSelectedVideo(videoId);
  }, [videoId]);

  return (
    <>
      <div className="video__description">
        <h1 className="video__title">{title}</h1>
        <div className="video__details-wrapper">
          <div className="video__details-container">
            <div className="video__details">
              <span className="video__details-creator">By {channel}</span>
            </div>
            <div className="video__details">
              <span className="video__details-date">
                {new Date(timestamp).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </span>
            </div>
          </div>
          <div className="video__metrics-container">
            <div className="video__metrics">
              <div className="video__metrics-item">
                <img
                  className="video__metrics-views-img"
                  src={eyeSymbol}
                  alt="Eye symbol"
                ></img>
              </div>
              <div className="video__metrics-item">
                <p className="video__metrics-views">{views}</p>
              </div>
            </div>
            <div className="video__metrics">
              <div className="video__metrics-item">
                <img
                  className="video__metrics-likes-img"
                  src={heartSymbol}
                  alt="Heart symbol"
                ></img>
              </div>
              <div className="video__metrics-item">
                <p className="video__metrics-likes">{likes}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="video__description-container">
          <p className="video__description-text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default MainContent;
