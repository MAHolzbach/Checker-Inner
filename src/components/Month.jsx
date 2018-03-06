import React from "react";
import DayCard from "./DayCard";

//FIXME: "month" is being console logged as undefined. I'm not passing state properly.

function Month(month) {
  const dayArray = [];
  console.log(month);
  for (let i = 0; i <= month; i++) {
    dayArray.push(i);
  }

  return (
    <div>{dayArray.map((day, index) => <DayCard date={index + 1} />)}</div>
  );
}

export default Month;
