import React from 'react'
import './upload.scss'
import Header from "../../components/header/Header"
import UploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";


function Upload() {
  return (
    <>
      <Header />
      <section className="upload__container">
        <section className="upload__title-wrapper">
          <h1 className="upload__title">Upload Video</h1>
        </section>
        <section class="upload__wrapper">
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
                defaultValue="Add a title to your video"
              ></textarea>
            </div>
            <div className="input__wrapper">
              <p className="input__label">Add a video description</p>
              <textarea
                className="input__body--description"
                name="description"
                defaultValue="Add a description to your video"
              ></textarea>
            </div>
            <div className="btn__wrapper">
              <button className="btn--publish">Publish</button>
              <button className="btn--cancel">Cancel</button>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}

export default Upload