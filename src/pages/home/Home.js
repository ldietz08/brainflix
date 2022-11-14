import Header from "../../components/header/Header.js";
import MainVideo from "../../components/mainContent/MainVideo.js";
import MainContent from "../../components/mainContent/MainContent.js";
import CommentBox from "../../components/comments/CommentBox";
import Comments from "../../components/comments/Comments";
import VideoList from "../../components/videoList/VideoList.js";
import { useState, useEffect } from "react";
import axios from "axios";
import "./home.scss";

const Home = () => {
  const selectedVideo = (videoId) =>
    `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`;

  const videoDetailsUrl = `https://project-2-api.herokuapp.com/videos?api_key=01d6c96d-6281-4691-b1ea-b8d697ef7ef9`;
  const apiKey = `01d6c96d-6281-4691-b1ea-b8d697ef7ef9`;
  const defaultVidId = `84e96018-4022-434e-80bf-000ce4cd12b8`;

  const [defaultId, setDefaultId] = useState(defaultVidId);
  const [videoDetails, setVideoDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  const getSelectedVideo = async (videoId) => {
    const { data } = await axios.get(selectedVideo(videoId));
    setVideoDetails(data);
  };

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const { data } = await axios.get(videoDetailsUrl);
        setVideos(data);
      } catch (error) {
        console.log("An error has occurred", error);
      }
    };
    getVideoList();
  }, []);

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const { data } = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${defaultId}?api_key=${apiKey}`
        );
        setVideoDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    getVideoDetails();
  }, []);

  return (
    <>
      <Header />
      <MainVideo videoDetails={videoDetails} />
      <section className="app">
        <div className="app__wrapper">
          <MainContent
            videos={videoDetails}
            defaultId={defaultId}
            getSelectedVideo={getSelectedVideo}
          />
          <CommentBox comments={videoDetails.comments} />
          <Comments comments={videoDetails.comments} />
        </div>
        <div className="app__wrapper">
          <VideoList videos={videos} videoDetails={videoDetails} />
        </div>
      </section>
    </>
  );
};

export default Home;
