// import { useState } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/MainContent";
import Comments from "./components/comments/Comments";
import VideoList from "./components/videoList/VideoList";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Comments />
      <VideoList />
    </>
  );
}

export default App;
