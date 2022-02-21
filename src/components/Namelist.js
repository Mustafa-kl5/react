import React from "react";
import Parson from "./Parson";

function Namelist() {
  const parson = [
    { id: 1, namme: "mustafa", age: 20, skills: "react" },
    { id: 2, namme: "mahmood", age: 60, skills: "react" },
    { id: 3, namme: "kamel", age: 80, skills: "react" },
    { id: 4, namme: "alowisi", age: 110, skills: "react" },
  ];
  const namelist = parson.map((parson) => <Parson key={parson.id} parson={parson}></Parson>);
  return <div>{namelist}</div>;
}

export default Namelist;
