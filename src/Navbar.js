import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.about}
            </a>
          </li>

          {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-light rounded mx-2"
            onClick={() => {
              props.toggleMode("light");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            onClick={() => {
              props.toggleMode("dark");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
        </div>
        {/* <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id="flexSwitchCheckChecked" />
          <label className="form-check-label" htmlfor="flexSwitchCheckChecked">Toggle Mode</label>
          </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
};

// Navbar.defaultProps = {
//     title: "Title",
//     about: "about";
//
