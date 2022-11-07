import "./MainContent.scss";

const MainVideo = ({ videoDetails }) => {
  const { image } = videoDetails;

  return (
    <main className="video">
      <video className="video__player" controls poster={image}></video>
    </main>
  );
};

export default MainVideo;