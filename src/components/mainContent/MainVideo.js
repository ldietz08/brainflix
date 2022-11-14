import "./mainContent.scss";

const MainVideo = ({ videoDetails }) => {
  return (
    <main className="video">
      <video
        className="video__player"
        controls
        poster={videoDetails.image}
      ></video>
    </main>
  );
};

export default MainVideo;
