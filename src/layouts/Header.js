import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/p1.jpg";
import img2 from "../images/p2.jpg";
import img3 from "../images/p3.jpg";

const Header = () => {
  //   const images = [img1, img2, img3];
  //   const index = Math.floor(Math.random() * images.length);
  //   const img = images[index];

  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <img src={img1} alt="obrazek" />} />
        <Route
          path="/products"
          render={() => <img src={img2} alt="obrazek" />}
        />
        <Route
          path="/contact"
          render={() => <img src={img3} alt="obrazek" />}
        />
        <Route path="/admin" render={() => <img src={img1} alt="obrazek" />} />
        <Route render={() => <img src={img1} alt="obrazek" />} />
      </Switch>
      {/* <img src={img} alt="img" /> */}
    </>
  );
};

export default Header;
