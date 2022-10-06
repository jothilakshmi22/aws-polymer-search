import React from "react";
import { SideContent } from "../Pages/SideContent";

function Module() {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-light mt-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Filter Results
      </button>
      {/* <!-- Modal --> */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div
            class="modal-content"
            style={{
              width: "700px",
            }}
          >
            <div class="modal-header">
              <p
                class="modal-title d-flex justify-content-center w-100 lh-lg"
                id="exampleModalLabel"
              >
                <i class="fa-solid fa-tag mt-2 me-2"></i> Filter data:
              </p>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="border-bottom pb-2">
                <i class="fa-solid fa-tag"></i> Filter:
                <span className="ms-3">
                  Build your filters by selecting the tags
                </span>
              </div>
              <div className="w-50 mt-0">
                <SideContent />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-dark p-2"
                data-bs-dismiss="modal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Module;
