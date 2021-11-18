// import React from "react";

// import "./card-list.styles.css";

// export const CardList = (props) => {
//   console.log(props);
//   return <div className="card-list">{props.children}</div>;
// };

// CODE FOR MOVING THE MAP ARRAY METHOD IN THE APP.JS

// import React from "react";

// import "./card-list.styles.css";

// import { Card } from "../card/card.component";

// export const CardList = (props) => (
//   <div className="card-list">
//     {props.monsters.map((monster) => (
//       <Card key={monster.id} monster={monster} />
//     ))}
//   </div>
// );

// FINAL CODE DESIGN(REFACTOR)

import React from "react";

import "./card-list.styles.css";

import { Card } from "../card/card.component";

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
