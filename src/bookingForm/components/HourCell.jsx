import React from "react";
import PropTypes from "prop-types";
var classNames = require("classnames");

const HourCell = ({ hour, index, setSelectedTimeSlot, selectedTimeSlot }) => {
  const handleHourCellClick = (e) => {
    setSelectedTimeSlot(e.nativeEvent.target.id);
  };
  const timeSlot = index < 10 ? `0${index}:00` : `${index}:00`;
  const elementClasses = classNames(
    "hours-list__hour-cell",
    { "hours-list__hour-cell_busy": hour },
    { "hours-list__hour-cell_selected": selectedTimeSlot == index }
  );

  return (
    <li onClick={handleHourCellClick} className={elementClasses} id={index}>
      {timeSlot}
    </li>
  );
};

export default HourCell;

HourCell.propTypes = {
  hour: PropTypes.string,
  index: PropTypes.number,
  selectedTimeSlot: PropTypes.string,
  setSelectedTimeSlot: PropTypes.func.isRequired,
};