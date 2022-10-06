import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

export function PopOver() {
  return (
    <>
      {["bottom"].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              {/* <Popover.Header as="h3">{`Popover ${placement}`}</Popover.Header> */}
              <Popover.Body className="w-75">
                <div className="d-flex ">
                  <div className="img">
                    <img
                      src="https://img.icons8.com/color/20/000000/diamond.png"
                      className="lh-lg"
                    />
                  </div>
                  <div className="mb-1">
                    <a
                      href="https://flixgem.com/?utm_source=aws"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <div className="text-dark">FlixGem</div>
                      <small className="text-muted text-nowrap ">
                        Discover hidden games for your Netlfix fix
                      </small>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="img">
                    <img
                      src="https://img.icons8.com/color/20/000000/y-combinator.png"
                      className="lh-lg"
                    />
                  </div>
                  <div className="mb-1">
                    <a
                      href="https://ycadvice.com/?utm_source=aws"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <div className="text-dark">YC Advice</div>
                      <small className="text-muted text-nowrap ">
                        The best startup device from Y combinator
                      </small>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="img">
                    <img src="https://img.icons8.com/emoji/20/000000/light-bulb-emoji.png" />
                  </div>
                  <div className="mb-1">
                    <a
                      href="https://interviewgeni.us/?utm_source=aws"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <div className="text-dark">Interview Genius</div>
                      <small className="text-muted text-nowrap ">
                        Master your tech interview
                      </small>
                    </a>
                  </div>
                </div>
                <div className="d-flex ">
                  <div className="img">
                    <img src="https://img.icons8.com/color/20/000000/search--v1.png" />
                  </div>
                  <div className="mb-1">
                    <a
                      href="https://app.polymersearch.com/discover/github-awesome?utm_source=aws"
                      target="_blank"
                      className="text-decoration-none"
                    >
                      <div className="text-dark">GitHub Awesome</div>
                      <small className="text-muted  ">
                        Search and discover every awesome list and GitHub
                      </small>
                    </a>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="outline-primary outline-none me-2">
            More sites
          </Button>
        </OverlayTrigger>
      ))}
    </>
  );
}
// export default PopOver;
