import React from "react";
import "./App.css";

export const SideContent = () => {
  return (
    <div className="overflow pt-2">
      <div className="search">
        <input
          class="form-control mt-2 mb-4 mx-2 "
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      </div>
      <div className="datas ">
        <div className="text-dark ms-1">Categories</div>
        <div className="bars blue  d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 textblue">Service Name </p>
          <small className="text-muted ">
            168 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars purple d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 textpurple">Language</p>
          <small className="text-muted ">
            68 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars navy d-flex justify-content-between mx-2 mb-1 rounded-2 ">
          <p className="ms-2 pnavy"> Topics </p>
          <small className="text-muted ">
            1000 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars blue d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">Search Keywords </p>
          <small className="text-muted ">
            335 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars dark-purple d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">License Name </p>
          <small className="text-muted ">
            22 <i class="fa-solid fa-plus"></i>
          </small>
        </div>

        <div className="bars red d-flex justify-content-between mx-2 mb-1 rounded-2 ">
          <p className="ms-2">Owner </p>
          <small className="text-muted ">
            1000 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars green  d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">Repository Type </p>
          <small className="text-muted ">
            2 <i class="fa-solid fa-plus"></i>
          </small>
        </div>

        <div className="bars purple d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">AWS-Verified</p>
          <small className="text-muted ">
            3 <i class="fa-solid fa-plus"></i>
          </small>
        </div>

        {/* nurmerical */}
        <div className="text-dark">
          <i class="fa-regular fa-circle-star"></i> Numerical
        </div>
        <div className="bars blue  d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 ">Stars</p>
          <small className="text-muted ">
            12 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars light-green d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 ">Forks</p>
          <small className="text-muted ">
            12 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars dark-purple d-flex justify-content-between mx-2 mb-1 rounded-2 ">
          <p className="ms-2 ">Watchers </p>
          <small className="text-muted ">
            12 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars yellows d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2 textyellow">Commits </p>
          <small className="text-muted ">
            11 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars red d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">Contributors </p>
          <small className="text-muted ">
            12 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="bars yellows d-flex justify-content-between mx-2 mb-1  rounded-2 ">
          <p className="ms-2">Open Issues </p>
          <small className="text-muted ">
            12 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="text-dark">Booleans</div>
        <div className="bars green  d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 ">Has Wiki</p>
          <small className="text-muted ">
            2 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="text-dark">
          <i class="fa-solid fa-calendar-days"></i> Dates
        </div>
        <div className="bars yellows  d-flex justify-content-between mx-2 mt-2 mb-1 rounded-2 ">
          <p className="ms-2 ">Last Updated</p>
          <small className="text-muted ">
            11 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        <div className="text-dark">
          <i class="fa-sharp fa-solid fa-link"></i> Links
        </div>
        <div className="bars green d-flex justify-content-between mx-2 mt-2 mb-3 rounded-2 ">
          <p className="ms-2">Repo Link</p>
          <small className="text-muted">
            1 <i class="fa-solid fa-plus"></i>
          </small>
        </div>
        {/* <button class="btn btn-primary my-2 ms-2" type="submit">
          Build with Polymer
        </button> */}
        <a
          href="https://relaxed-begonia-30b585.netlify.app/"
          target="_blank"
          className=" bg-primary text-white rounded px-2 py-2 ms-2 mt-2 text-decoration-none "
          id="black"
        >
          Build with Polymer
        </a>
      </div>
    </div>
  );
};
