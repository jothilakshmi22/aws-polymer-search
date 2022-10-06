import React from "react";
import RightContent from "./RightContent";
import { SideContent } from "./SideContent";

export const Main = () => {
  return (
    <div className="w-100 d-flex ">
      <div className="left-side-scroll w-25 h-100">
        <SideContent />
      </div>
      <div className="main-cards w-75 h-100 ">
        <RightContent />
      </div>
    </div>
  );
};
