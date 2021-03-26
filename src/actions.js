import people from "./data/people.json";

function fetchPeople() {
  return {
    payload: people.results,
    type: "PEOPLE_LOAD"
  };
}

export { fetchPeople };
