import React from "react";
import DayCard from "./DayCard";

function Month() {
  const dayCount = 30;
  const dayArray = [];

  for (let i = 1; i <= dayCount; i++) {
    dayArray.push(i);
  }

  return (
    <div>{dayArray.map((day, index) => <DayCard date={index + 1} />)}</div>
  );
}

export default Month;
