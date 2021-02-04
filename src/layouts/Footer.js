import React from "react";
import { Route } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <h2>Stopka</h2>
      <Route
        path="/"
        exact
        render={(props) => <p>Jesteś na stronie głównej</p>}
      />

      <Route
        path="/:id"
        exact
        render={(props) => {
          return (
            <>
              <p>{props.match.params.id}</p>
              {/* <p>{props.match.url}</p>
              <p>{props.match.path}</p> */}
            </>
          );
        }}
      />

      <Route
        path="/:id/:idProduct"
        render={(props) => {
          return (
            <>
              <p>{props.match.params.idProduct}</p>
              {/* <p>{props.match.url}</p>
              <p>{props.match.path}</p> */}
            </>
          );
        }}
      />
    </div>
  );
};

export default Footer;
