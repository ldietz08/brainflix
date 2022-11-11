import Header from "../../components/header/Header.js";
import MainVideo from "../../components/mainContent/MainVideo.js";
import MainContent from "../../components/mainContent/MainContent.js";
import CommentBox from "../../components/comments/CommentBox";
import Comments from "../../components/comments/Comments";
import VideoList from "../../components/videoList/VideoList.js";
// import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
   const videoDetailsUrl = `https://project-2-api.herokuapp.com/videos/?api_key=01d6c96d-6281-4691-b1ea-b8d697ef7ef9`;
  const defaultVidId = `84e96018-4022-434e-80bf-000ce4cd12b8`;

  const [videoId, setVideoId] = useState([
    "84e96018-4022-434e-80bf-000ce4cd12b8",
  ]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [videos, setVideos] = useState([]);

  // const params = useParams();

  useEffect(() => {
    
    const getVideoList = async (videoId) => {
      try {
        const { data } = await axios.get(videoDetailsUrl);
        const filteredVideos = data.filter(
          (video) => video.id !== videoId
        );

        const defaultVideo = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${defaultVidId}?api_key=01d6c96d-6281-4691-b1ea-b8d697ef7ef9`
        );
        setVideoId(data[0].id);
        setVideos(filteredVideos);
        setVideoDetails(defaultVideo.data);
      } catch (error) {
        console.log("An error has occurred", error);
      }
    };
    getVideoList(videoId);
  }, []);

// useEffect(() => {
//   if(params.videoId) {
//     const getVidId = async(videoId) => {
//       try {
//         const { data } = await axios.get(`https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key=01d6c96d-6281-4691-b1ea-b8d697ef7ef9`);
//         setVideoDetails(data)
//       }
//     }
//   }
// }

  return (
    <>
      <Header />
      <MainVideo videos={videoDetails} />
      <section className="app">
        <div className="app__wrapper">
          <MainContent videos={videoDetails} />
          <CommentBox comments={videoDetails.comments} />
          <Comments comments={videoDetails.comments} />
        </div>
        <div className="app__wrapper">
          <VideoList videos={videos} />
        </div>
      </section>
    </>
  );
}

export default Home;
