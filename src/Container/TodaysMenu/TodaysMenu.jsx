import React from "react";
import "./TodaysMenu.scss";
import { SectionTitle } from "../../Components";

const TodaysMenu = () => {
  return (
    <section className="app__todaysMenu app__conatiner">
      <SectionTitle title="What today's Menu?" subtitle="今日のスペシャル" />
    </section>
  );
};

export default TodaysMenu;
