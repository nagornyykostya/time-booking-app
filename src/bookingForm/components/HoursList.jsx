import React from "react";
import HourCell from "./HourCell.jsx";

const HoursList = ({ freeHours, setSelectedTimeSlot, selectedTimeSlot }) => {
  return (
    <div>
      <h2 className="hours-list__header">Available hours:</h2>
      <ul className="hours-list">
        {freeHours.map((hour, index) => {
          return (
            <HourCell
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
              key={index}
              index={index}
              hour={hour}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default HoursList;
