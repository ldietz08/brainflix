import React, { useRef } from "react";
import "./upload.scss";
import Header from "../../components/header/Header";
import UploadThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const formRef = useRef();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = formRef.current.title.value;
    const description = formRef.current.description.value;
    const BACK_END_URL = "http://localhost:8080/videos";

    axios
      .post(BACK_END_URL, {
        title: title,
        description: description,
      })
      .then( navigate("/"))
      .catch((error) => {
        console.log("An error has occurred", error);
      });
  };

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
            <img className="hero__img" alt="Biking" src={UploadThumbnail}></img>
          </main>
          <section className="input__container">
            <form
              ref={formRef}
              className="form"
              id="uploadForm"
              onSubmit={submitHandler}
            >
              <div className="input__wrapper">
                <p className="input__label">Title of your video</p>
                <textarea
                  id="title"
                  className="input__body--title"
                  name="title"
                  required
                  placeholder="Add a title to your video"
                ></textarea>
              </div>
              <div className="input__wrapper">
                <p className="input__label">Add a video description</p>
                <textarea
                  id="description"
                  className="input__body--description"
                  name="description"
                  required
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
            </form>
            <div className="btn__wrapper">
              {/* <Link to={"/"} className="btn__link"> */}
              <button type="submit" form="uploadForm" className="btn--publish">
                Publish
              </button>
              {/* </Link> */}
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
