import "./CommentsCard.scss";
import React from "react";

const CommentsCard = ({comments}) => {

  return (
    <>
      <div className="comments__content-container">
          <>
            <div className="comments__content-logo"></div>
            <div className="comments__content-wrapper">
              <div className="comments__content">
                <h3 className="comments__content-name">{comments.name}</h3>
                <p className="comments__content-date">{comments.timestamp}</p>
              </div>
              <p className="comments__content-text">{comments.comment}</p>
            </div>
          </>
      </div>
    </>
  );
}

export default CommentsCard;
