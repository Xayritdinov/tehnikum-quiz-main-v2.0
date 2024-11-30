import React from "react";

import { Outlet } from "react-router";

export const Step = () => {
  
  return (
    <div className="container">
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};
