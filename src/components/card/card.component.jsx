// import React from "react";

// import "./card.styles.css";

// export const Card = ({props}) => (
//   <div className="card-container">
//     <img
//       alt="monster"
//       src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
//     />
//     <h2>{props.monster.name}</h2>
//     <p>{props.monster.email}</p>
//   </div>
// );

// FINAL CODE DESIGN(REFACTOR)

import React from "react";

import "./card.styles.css";

export const Card = ({ monster }) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);
