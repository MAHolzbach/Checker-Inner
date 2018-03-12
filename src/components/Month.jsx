import React from "react";
import DayCard from "./DayCard";

const Month = ({ month }) => {
  const dayArray = [];
  for (let i = 1; i <= month.SelectedMonth; i++) {
    dayArray.push(i);
  }

  return (
    <div>
      {dayArray.map((day, index) => (
        <DayCard date={index + 1} key={index + 1} />
      ))}
    </div>
  );
};

export default Month;
