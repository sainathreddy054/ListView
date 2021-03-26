import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import MoreDetails from "./MoreDetails";
import { fetchPeople } from "../actions";

import "./StarWars.css";

export function StarWarsView(props) {
  const [clickedIndex, setClickedIndex] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(props.fetchPeople());
  }, [props, dispatch]);

  return (
    <div>
      <h3>This is a list view</h3>
      <ul>
        {Array.isArray(props.people) &&
          props.people.slice(0, 5).map((p, i) => (
            <li key={i} onClick={() => setClickedIndex(i)}>
              {`${p.name} - `}
              <span
                className={
                  p.gender === "male"
                    ? "male"
                    : p.gender === "female"
                    ? "female"
                    : "na"
                }
              >
                {p.gender}
              </span>{" "}
              {`- ${p.height}`}
              {clickedIndex === i && <MoreDetails person={p} />}
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({ people: state.people });

const mapDispatchToProps = { fetchPeople };

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsView);
