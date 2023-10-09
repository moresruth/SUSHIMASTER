import React from "react";
import "./TodaysMenu.scss";
import { data, images } from "../../constants";
import MenuItem from "../../Components/MenuItem/MenuItem";

const TodaysMenu = () => {
  return (
    <section className="app__todaysmenu app__container">
      {/* <div className="app__wrapper"> */}
      <div className=" flex__container">
        <div className="flex__container-box">
          <div className="flex__container-box_item ">
            <div className="app__todaysmenu-content">
              <h3 className="p__playfair">Today’s Sushi Special</h3>
              <img src={images.TemakiImg} alt="" />
            </div>
          </div>

          <div className="flex__container-box_item ">
            <div className="app__todaysmenu-content">
              <h3 className="p__playfair app__flex ">TEMAKI & NIGIRI</h3>
              {data.temaki.map((temaki, index) => (
                <MenuItem
                  key={temaki.title + index}
                  title={temaki.title}
                  price={temaki.price}
                />
              ))}
            </div>
          </div>

          <div className="flex__container-box_item">
            <div className="app__todaysmenu-content">
              <h3 className="p__playfair app__flex ">MAKI & URAMAKI</h3>
              {data.uramaki.map((uramaki, index) => (
                <MenuItem
                  key={uramaki.title + index}
                  title={uramaki.title}
                  price={uramaki.price}
                />
              ))}
            </div>
          </div>

          <div className="flex__container-box_item">
            <div className="app__todaysmenu-content">
              <h3 className="p__playfair">Today’s Sushi Special</h3>
              <img src={images.UmarakiImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default TodaysMenu;
