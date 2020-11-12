// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";
import logo from '../../assets/instagram-logo-only-font.png';

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="logo-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>
      <img className="text-logo" src={logo} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="&#128269; Search"
          onChange={props.changeSearch}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
