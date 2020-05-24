import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const FinalMessage = ({ selectedTimeSlot, bookedDate, resetStore }) => {
  if (!selectedTimeSlot || !bookedDate) return <div></div>;
  const timeSlot =
    +selectedTimeSlot < 10
      ? `0${selectedTimeSlot}:00`
      : `${selectedTimeSlot}:00`;

  return (
    <div className="final-message">
      <h2 className="final-message__header">Thank you for booking!</h2>
      <p className="final-message__text">
        Your booking on
        <span className="final-message__date">
          {" "}
          {bookedDate.bookingDate}
        </span>{" "}
        at
        <span className="final-message__time"> {timeSlot}</span> is already
        reserved and not available for others.
      </p>
      <Button onClick={() => resetStore()} variant="contained" color="primary">
        Close this message
      </Button>
    </div>
  );
};

export default FinalMessage;

FinalMessage.propTypes = {
    selectedTimeSlot: PropTypes.string,
    bookedDate: PropTypes.object,
    resetStore: PropTypes.func
}