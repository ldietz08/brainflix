import "./videoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({ videos }) => {
  return (
    <>
      <aside className="videoList__container">
        <h4 className="videoList__title-main">Next Videos</h4>
        {videos.map((video) => (
          <div key={video.id}>
            <Link
              className="videoList__items-wrapper"
              to={`/videos/${video.id}`}
            >
              <div className="videoList__item">
                <img
                  src={video.image}
                  alt={video.title}
                  className="videoList__thumbnail"
                />
              </div>
              <div className="videoList__item">
                <h4 className="videoList__title">{video.title}</h4>
                <p className="videoList__creator">{video.channel}</p>
              </div>
            </Link>
          </div>
        ))}
      </aside>
    </>
  );
};

export default VideoList;
