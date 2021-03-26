import React from "react";

export default function MoreDetails(props) {
  return (
    <div>
      <a href={props.person.homeworld}>homeworld</a>
      <div>
        {props.person.species.map((e, i) => (
          <a key={e} href={e}>
            species_{i}
          </a>
        ))}
      </div>
    </div>
  );
}
