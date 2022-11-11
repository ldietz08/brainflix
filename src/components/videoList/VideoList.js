import "./videoList.scss";
// import { Link } from 'react-router-dom';

const VideoList = ({videos}) => {
  return (
    <>
      <aside className="videoList__container">
        <h4 className="videoList__title-main">Next Videos</h4>
        {videos.map((video) => (
          <div className="videoList__items-wrapper" key={video.id}>
            {/* <Link to= {`/videos/${videos.id}`}> */}
            <div className="videoList__item">
              <img
                src={video.image}
                alt={video.title}
                className="videoList__thumbnail"
              />
              {/* </Link> */}
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
