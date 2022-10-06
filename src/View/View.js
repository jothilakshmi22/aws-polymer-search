import React from "react";
import "./view.css";
import { Link, Outlet } from "react-router-dom";
const View = () => {
  return (
    <div className="view-page text-center my-auto">
      <img src="https://img.icons8.com/ultraviolet/70/000000/visible.png" />
      <h4>You have no saved views</h4>
      <p className="text-muted mt-3">
        Start building an Insights or Data view. Once you save it it will appear
        here.
      </p>
      <div className="d-flex mt-4">
        <Link to="/">
          <button className="btn btn-dark text-white me-2">Go to Data</button>
        </Link>
        <Link to="/insights">
          <button className="btn btn-dark text-white">Go to Insights</button>
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default View;
