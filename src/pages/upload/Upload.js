import React from "react";
import "./upload.scss";
import Header from "../../components/header/Header";
import UploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <>
      <Header />
      <section className="upload__container">
        <section className="upload__title-wrapper">
          <h1 className="upload__title">Upload Video</h1>
        </section>
        <section className="upload__wrapper">
          <main className="hero">
            <p className="hero__title">Video Thumbnail</p>
            <img className="hero__img" src={UploadThumbnail}></img>
          </main>
          <section className="input__container">
            <div className="input__wrapper">
              <p className="input__label">Title of your video</p>
              <textarea
                className="input__body--title"
                name="title"
                placeholder="Add a title to your video"
              ></textarea>
            </div>
            <div className="input__wrapper">
              <p className="input__label">Add a video description</p>
              <textarea
                className="input__body--description"
                name="description"
                placeholder="Add a description to your video"
              ></textarea>
            </div>
            <div className="btn__wrapper">
              <Link to={"/publish"} className="btn__link">
                <button className="btn--publish">Publish</button>
              </Link>
              <Link to={"/"} className="btn__link">
                <button className="btn--cancel">Cancel</button>
              </Link>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Upload;
