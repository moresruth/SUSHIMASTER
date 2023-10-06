import React from "react";
import "./MenuItem.scss";

const MenuItem = ({ title, price }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__poppins">{title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__poppins">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
