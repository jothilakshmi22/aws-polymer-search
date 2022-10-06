import "./dismissHeader.css";
import { useState } from "react";

export default function DismissHeader() {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="dismissContainer">
          <div className="dismissText">
            <h6>
              <i class="fa-sharp fa-solid fa-bolt-lightning me-2"></i>
              Transform your spreadsheet into a powerful search and insights
              engine with polymer search.{" "}
              <a
                href="https://relaxed-begonia-30b585.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more.
              </a>
            </h6>
          </div>
          <div className="dismissButton">
            <button
              className="btn"
              onClick={handleShow}
              style={{ color: "white" }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
