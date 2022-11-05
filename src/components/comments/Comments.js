import React from "react";
import "./Comments.scss";

const Comments = ({comments}) => {
  return (
    <>
      <section className="comments__container">
        <p className="comments__total">{comments.length} comments</p>
        <div className="comments__wrapper">
          <div className="comments__img"></div>
          <div className="comments__input-btn-container">
            <div className="comments__input">
              <p className="comments__input-title">Join the conversation</p>
              <textarea
                className="comments__text-input"
                defaultValue="Add a new comment"
              ></textarea>
            </div>
            <div className="comments__btn-wrapper">
              <button className="comments__btn">Comment</button>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="comments__content-container">
          <div className="comments__content-logo"></div>
          <div className="comments__content-wrapper">
            <div className="comments__content">
              <h3 className="comments__content-name">{comments.name}</h3>
              <p className="comments__content-date">{comments.timestamp}</p>
            </div>
            <p className="comments__content-text">{comments.comment}</p>
          </div>
      </div> */}
    </>
  );
}

export default Comments;


