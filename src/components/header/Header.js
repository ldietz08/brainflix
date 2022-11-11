import BrainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
// import { Link } from "react-router-dom"
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        {/* <Link to="/"> */}
        <img
          className="header__logo"
          src={BrainFlixLogo}
          alt="Brainflix logo"
        ></img>
        {/* <Link /> */}
      </div>
      <div className="header__searchBtn-wrapper">
        <div className="header__searchBar-img-container">
          <div className="header__searchBar-wrapper">
            <input
              className="header__searchBar-input"
              type="text"
              placeholder="Search"
            ></input>
          </div>
          <div className="header__img-wrapper"></div>
        </div>
        <div className="header__btn-wrapper">
          {/* <Link to "/Home"> */}
          <button className="header__btn">Upload</button>
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
