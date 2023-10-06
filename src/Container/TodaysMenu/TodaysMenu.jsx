import React from "react";
import "./TodaysMenu.scss";
import { MenuItem, SectionTitle } from "../../Components";
import { images, data } from "../../constants";

const TodaysMenu = () => {
  return (
    <section className="app__todaysMenu app__container">
      <div className="app__todaysMenu-content app__wrapper">
        <div className="app__todaysMenu-content_item">
          <h2>Today’s Sushi Special</h2>
          <div className="app__todaysMenu-content_item--img">
            <img src={images.TemakiImg} alt="temaki img" />
          </div>
        </div>

        <div className="app__todaysMenu-content_item app__flex">
          <div className="app__todaysMenu-content_item--two">
            <h3 className="app__flex ">TEMAKI & NIGIRI</h3>
            {data.temaki.map((temaki, index) => (
              <MenuItem
                key={temaki.title + index}
                title={temaki.title}
                price={temaki.price}
              />
            ))}
          </div>
        </div>

        <div className="app__todaysMenu-content_item app__flex">
          <div className="app__todaysMenu-content_item--two">
            <h3 className="app__flex">TEMAKI & NIGIRI</h3>
            {data.uramaki.map((uramaki, index) => (
              <MenuItem
                key={uramaki.title + index}
                title={uramaki.title}
                price={uramaki.price}
              />
            ))}
          </div>
        </div>

        <div className="app__todaysMenu-content_item">
          <h2>Today’s Sushi Special</h2>
          <div className="app__todaysMenu-content_item--img">
            <img src={images.UmarakiImg} alt="temaki img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodaysMenu;
