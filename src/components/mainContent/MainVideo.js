import "./mainContent.scss";

const MainVideo = ({ videos }) => {
  return (
    <main className="video">
      <video className="video__player" controls poster={videos.image}></video>
    </main>
  );
};

export default MainVideo;
