import React, { useState, useCallback } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import Loader from "react-loader-spinner";
import FinalMessage from "./FinalMessage.jsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  freeHours,
  isLoadingSelector,
  isNewBookingSelector,
  bookedDateSelector,
  selectedTimeSlotSelector,
  isFinalMessageVisibleSelector,
} from "../dates.selectors.js";
import { updateNewBookingObjDate } from "../dateUtils.js";
import * as dateActions from "../dates.actions.js";
import HoursList from "./HoursList.jsx";

const BookingForm = ({
  fetchDate,
  freeHours,
  isNewBooking,
  postNewBookingDateObj,
  updateBookingObjData,
  bookedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  isLoading,
  isFinalMessageVisible,
  resetStore,
}) => {
  const [issueValue, setIssueValue] = useState("");
  const [dateValue, setDate] = useState(null);
  const handleBookingCreate = useCallback(() => {
    const newBookedObj = updateNewBookingObjDate(
      bookedDate,
      selectedTimeSlot,
      issueValue
    );
    isNewBooking
      ? postNewBookingDateObj(newBookedObj)
      : updateBookingObjData(newBookedObj.id, newBookedObj);
    setIssueValue("");
    setDate(null);
  }, [bookedDate, isNewBooking, selectedTimeSlot]);

  const handleIssueChange = (e) => {
    setIssueValue(e.target.value);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    fetchDate(newDate);
  };

  return (
    <form className="inputs-block">
      {isLoading && (
        <Loader
          className="loader"
          type="TailSpin"
          color="#00BFFF"
          height={120}
          width={120}
        />
      )}
      {isFinalMessageVisible ? (
        <FinalMessage
          selectedTimeSlot={selectedTimeSlot}
          bookedDate={bookedDate}
          resetStore={resetStore}
        />
      ) : (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TextField
            id="standard-basic"
            label="What would you like to do?"
            value={issueValue}
            onChange={handleIssueChange}
          />
          <DatePicker
            className="date-picker"
            value={dateValue}
            onChange={handleDateChange}
            label="Select the date"
          />
          {bookedDate && (
            <HoursList
              freeHours={freeHours}
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
            />
          )}
          <Button
            disabled={!selectedTimeSlot}
            onClick={handleBookingCreate}
            variant="contained"
            color="primary"
          >
            Make a booking
          </Button>
        </MuiPickersUtilsProvider>
      )}
    </form>
  );
};

const mapState = (state) => {
  return {
    freeHours: freeHours(state),
    isLoading: isLoadingSelector(state),
    isNewBooking: isNewBookingSelector(state),
    bookedDate: bookedDateSelector(state),
    selectedTimeSlot: selectedTimeSlotSelector(state),
    isFinalMessageVisible: isFinalMessageVisibleSelector(state),
  };
};

const mapDisp = {
  fetchDate: dateActions.fetchDate,
  postNewBookingDateObj: dateActions.postNewBookingDateObj,
  updateBookingObjData: dateActions.updateBookingObjData,
  setSelectedTimeSlot: dateActions.setSelectedTimeSlot,
  resetStore: dateActions.resetStore,
};

export default connect(mapState, mapDisp)(BookingForm);

BookingForm.propTypes = {
  freeHours: PropTypes.array,
  isLoading: PropTypes.bool,
  isNewBooking: PropTypes.bool,
  bookedDate: PropTypes.object,
  selectedTimeSlot: PropTypes.string,
  fetchDate: PropTypes.func.isRequired,
  postNewBookingDateObj: PropTypes.func.isRequired,
  updateBookingObjData: PropTypes.func.isRequired,
  setSelectedTimeSlot: PropTypes.func.isRequired,
  isFinalMessageVisible: PropTypes.bool,
  resetStore: PropTypes.func.isRequired
};
