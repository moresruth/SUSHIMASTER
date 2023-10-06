import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="app__sectionTitle ">
      <h1>{title}</h1>
      <p className="p__playafair">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
