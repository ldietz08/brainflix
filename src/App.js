import "./App.scss";
import Header from "./components/header/Header.js";
import MainVideo from "./components/mainContent/MainVideo.js";
import MainContent from "./components/mainContent/MainContent.js";
import CommentBox from "./components/comments/CommentBox";
import Comments from "./components/comments/Comments";
import VideoList from "./components/videoList/VideoList.js";
import { useState } from "react";
import getVideoDetails, { getVideos } from "../src/assets/utils/Utils.js";

const App = () => {
  // Set BMX video id as the default on page load
  const [defaultVidId, setDefaultVidId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  //Set state for video list
  const [videos, setVideos] = useState(getVideos(defaultVidId));
  const [videoDetails, setVideoDetails] = useState(
    getVideoDetails(defaultVidId)
  );

  //Click handler function
  const handleClick = (clickEvent, vidIdClickedOn) => {
    setDefaultVidId(vidIdClickedOn);
    setVideos(getVideos(vidIdClickedOn));
    setVideoDetails(getVideoDetails(vidIdClickedOn));
  };
  return (
    <>
      <Header />
      <MainVideo videoDetails={videoDetails} />
      <section className="app">
        <div className="app__wrapper">
          <MainContent videoDetails={videoDetails} />
          <CommentBox comments={videoDetails.comments} />
          <Comments comments={videoDetails.comments} />
        </div>
        <div className="app__wrapper">
          <VideoList videos={videos} onClick={handleClick} />
        </div>
      </section>
    </>
  );
};

export default App;
