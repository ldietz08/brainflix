import "./videoList.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoList = ({ videos, videoDetails }) => {
  const apiKey = `01d6c96d-6281-4691-b1ea-b8d697ef7ef9`;
  const [selectedVideo, setSelectedVideo] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.videoId) {
      const getSelectedVid = async () => {
        try {
          const selectedVideo = await axios.get(
            `https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key=${apiKey}`
          );
          setSelectedVideo(selectedVideo.data);
        } catch (error) {
          console.log("An error has occurred", error);
        }
      };
      getSelectedVid();
    }
  }, [params]);

  return (
    <>
      <aside className="videoList__container">
        <h4 className="videoList__title-main">Next Videos</h4>
        {videos
          .filter((video) => video.id !== videoDetails.id)
          .map((video) => (
            <div key={video.id}>
              <Link className="videoList__items-wrapper" to={`/${video.id}`}>
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
