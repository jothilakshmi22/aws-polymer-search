import React from "react";
import "./insights.css";
import Module from "./Module";
const Insights = () => {
  return (
    <div className="d-flex ">
      <div className="insight-left w-25 d-flex flex-column">
        <button className="mt-4 mx-2 btn btn-dark text-white d-block px-5">
          <i class="fa-solid fa-plus"></i> New Block
        </button>
        {/* <button className="mt-4 btn btn-primary mx-5">
          Built With Polymer
        </button> */}
        <a
          href="https://relaxed-begonia-30b585.netlify.app/"
          target="_blank"
          className="buildyourpolymer bg-primary text-white rounded px-2 py-1 mx-5 mt-4 text-center text-decoration-none"
        >
          Build with Polymer
        </a>
      </div>

      <div className="insights-right w-75  ">
        <div className="nav-bar d-flex ">
          <div className="mx-4  pt-2 my-3">
            <i class="fa-solid fa-tag"></i> Filter:
          </div>
          <div className="my-3">
            <Module />
          </div>
        </div>
        <div className="main-image d-flex justify-content-center align-items-center flex-column ">
          <img src="https://img.icons8.com/fluency/60/000000/image.png" />
          <h3>Add Insights</h3>
          <p className="text-muted text-center">
            Start adding insights such as charts, <br /> visualizations, and
            trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
