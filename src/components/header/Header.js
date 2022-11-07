import BrainFlixLogo from "../../assets/logo/BrainFlix-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-wrapper">
        <img
          className="header__logo"
          src={BrainFlixLogo}
          alt="Brainflix logo"
        ></img>
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
          <button className="header__btn">Upload</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
