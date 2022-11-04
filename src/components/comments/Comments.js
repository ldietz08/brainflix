import React from "react";
import "./Comments.scss";

function Comments() {
  return (
    <>
      <section className="comments__container">
        <p className="comments__total">3 comments</p>
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
    </>
  );
}

export default Comments;
