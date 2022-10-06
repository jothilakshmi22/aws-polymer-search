import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { PopOver } from "./PopOver";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import DismissHeader from "../dismissHeader/dismissHeader";
const NavBar = () => {
  return (
    <>
      <header>
        {/* <DismissHeader /> */}

        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
                alt="AWS logo"
                width="30px"
                className="me-3"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <div
                    class="nav-link active me-5 pe-5 "
                    aria-current="page"
                    href="#"
                  >
                    <h6 class="everythingAws" title="Everything AWS">
                      Everything AWS
                    </h6>
                  </div>
                </li>
                <li class="nav-item">
                  <Link to="/">
                    <a href="#" className="hover">
                      <i class="fa-sharp fa-solid fa-table "></i> Data
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/insights">
                    <a href="#" className="hover">
                      <i class="fa-solid fa-chart-simple"></i> Insights
                    </a>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to="/view">
                    <a
                      href="#"
                      tabindex="-1"
                      aria-disabled="true"
                      className="hover"
                    >
                      <i class="fa-sharp fa-solid fa-eye"></i> Views
                    </a>
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                {/* <button class="btn btn-outline-primary me-2  " type="submit">
                  More Sites
                </button> */}
                <PopOver />
                <a
                  href="https://relaxed-begonia-30b585.netlify.app/"
                  target="_blank"
                  className="buildyourpolymer bg-primary text-white rounded px-2 pt-1 hover-black"
                >
                  Build with Polymer
                </a>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
