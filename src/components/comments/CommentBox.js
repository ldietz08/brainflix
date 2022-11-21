import React from "react";
import "./comments.scss";

const CommentBox = ({comments}) => {
  return (
    <section className="comments__container">
      {comments?.length > 0 ? (
        <p className="comments__total">{comments?.length} comments</p>
      ) : (
        <p className="comments__total">No comments</p>
      )}
      <div className="comments__wrapper">
        <div className="comments__img"></div>
        <div className="comments__input-btn-container">
          <div className="comments__input">
            <p className="comments__input-title">Join the conversation</p>
            <textarea
              name="comment"
              className="comments__text-input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <div className="comments__btn-wrapper">
            <button type="submit" className="comments__btn">
              Comment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommentBox;
