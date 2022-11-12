import React from "react";
import "./publish.scss"
import { Link } from "react-router-dom";

const Publish = () => {
    return (
      <>
        <section className="publish">
          <div className="publish__title-container">
            <h1 className="publish__title">
              YAY
            </h1>
          </div>
          <div>
            <span className="publish__logo" aria-label="a rocket" role="img">
              🚀
            </span>
          </div>
        </section>
        <div className="button__wrapper">
          <Link to={"/upload"} className="button__link">
            <button className="button">Back</button>
          </Link>
        </div>
      </>
    );
}

export default Publish;